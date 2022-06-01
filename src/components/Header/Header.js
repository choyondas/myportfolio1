import React from 'react';
import CTA from './CTA';
import './Header.css'


import ME from '../../assets/choyondas.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Choyon Das</h1>
                <h5 className="text-light"> Frontend Developer</h5>


                <CTA></CTA>
                <HeaderSocial></HeaderSocial>   
                <div className="me">
                    <img src={ME} alt="" />

                </div>



                <a href="#contact" className="scroll_down">Scroll Down</a>

            </div>
        </header>
    );
};

export default Header;