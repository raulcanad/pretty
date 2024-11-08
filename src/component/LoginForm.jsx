import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión

    // Función para manejar cambios en los campos
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
            validatePassword(value); // Llamamos a la validación de la contraseña
        }
    };

    // Función para validar que la contraseña solo tenga números
    const validatePassword = (password) => {
        const regex = /^[0-9]*$/;
        setIsPasswordValid(regex.test(password));
    };

    // Función para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isPasswordValid) {
            alert("Login Successful!");
            setIsLoggedIn(true); // Cambia el estado a true cuando el login sea exitoso
            document.body.style.backgroundColor = "green"; // Cambia el fondo del body a verde
        } else {
            alert("Password should only contain numbers.");
        }
    };

    if (isLoggedIn) {
        return null; // Si el usuario está logueado, no renderiza el formulario
    }

    return (
        <form className="pretty-login-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleInputChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password (Numbers only)"
                value={password}
                onChange={handleInputChange}
                required
            />
            {!isPasswordValid && <p style={{ color: "red" }}>Password should only contain numbers!</p>}
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
