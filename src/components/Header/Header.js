import React from 'react';
import CTA from './CTA';
import './Header.css'


import ME from '../../assets/choyondas.png';
import {BsFillFileArrowDownFill} from 'react-icons/bs'

import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header style={{     backgroundSize: 'cover',
    backgroundImage: `url(https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png)`,
    backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        width:'100%'}}>
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
        </header>
    );
};

export default Header;