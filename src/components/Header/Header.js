import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Choyon Das</h1>
                <h5 className="text-light"> Frontend Developer</h5>
            </div>
        </header>
    );
};

export default Header;