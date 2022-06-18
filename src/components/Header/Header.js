import React from 'react';
import CTA from './CTA';
import './Header.css'


import ME from '../../assets/choyondas.png';
import {BsFillFileArrowDownFill} from 'react-icons/bs'

import HeaderSocial from './HeaderSocial';
import Animation from '../Animation';

const Header = () => {
    return (
        <header >
            <div className="container header_container">
                <h4 className="anima">Hello I'm</h4>
                <h1 className="anima">Choyon Das</h1>
                <h5 className="text-light anima"> Frontend Developer</h5>
                <CTA className="anima"></CTA>
                <HeaderSocial className="anima"></HeaderSocial>   
                <div className="me anima">
                    <img className="anima" src={ME} alt="" />

                </div>
                <a href="#footer" className="scroll_down anima"><BsFillFileArrowDownFill/></a>

                



            </div>
            <Animation/>

 
           
        </header>
    );
};

export default Header;