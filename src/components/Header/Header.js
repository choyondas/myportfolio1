import React from 'react';
import CTA from './CTA';
import './Header.css'


import ME from '../../assets/choyondas.png';
import {BsFillFileArrowDownFill} from 'react-icons/bs'

import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header >
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Choyon Das</h1>
                <h5 className="text-light"> Frontend Developer</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>   
                <div className="me">
                    <img src={ME} alt="" />

                </div>
                <a href="#footer" className="scroll_down"><BsFillFileArrowDownFill/></a>

                



            </div>

 <div className="square">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    
                </ul>
            </div>

            
 <div className="circle">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    
                </ul>
            </div>
           
        </header>
    );
};

export default Header;