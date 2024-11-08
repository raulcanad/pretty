import '../component/stylo/Pretty.css';
import LoginForm from './LoginForm';
import cat from '../component/stylo/images/cat.svg';
import dog from '../component/stylo/images/dog.svg'
import dog2 from '../component/stylo/images/dog2.svg'

const Pretty = () => {
    
    return (
        <div className="pretty-container">
            {/* Header */}
            <header className="pretty-header">
                <h1 className="pretty-title">Welcome to Pretty Component</h1>
                <LoginForm />
            </header>
            
            {/* Main Content with Reordered Columns */}
            <div className="pretty-content">
                {/* Left Column */}
                <div className="pretty-column pretty-left-column">
                <img src={cat} alt="Cat" className="column-image" />
                    Left Column Content
                </div>

                {/* Center Column */}
                <div className="pretty-column pretty-center-column">
                <img src={dog} alt="Dog" className="column-image" />
                    Column Center Content
                </div>

                {/* Right Column */}
                <div className="pretty-column pretty-right-column">
                <img src={dog2} alt="Dog 2" className="column-image" />
                    Right Column Content
                </div>
            </div>

            {/* Footer */}
            <footer className="pretty-footer">
                <p>© 2024 Apipana Interview</p>
            </footer>
        </div>
    );
}

export default Pretty;
