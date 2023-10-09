import { useState } from 'react';
import './Header.css';
import Custombutton from '../CustomBtn/Custombutton';

const Header = () => {
    const [showCustomButton, setShowCustomButton] = useState(false);

    const toggleCustomButton = () => {
        setShowCustomButton(!showCustomButton);
    }

    return (
        <div>
            <div className="navbar">
                <div className="navbar-brand">Button Styler</div>
                <button onClick={toggleCustomButton}>
                    {showCustomButton ? 'Hide Custom Button' : 'Show Custom Button'}
                </button>
            </div>

            {showCustomButton && <Custombutton />}
        </div>
    );
}

export default Header;
