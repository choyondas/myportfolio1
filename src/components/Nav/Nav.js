import React, { useState } from 'react';
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { SiKnowledgebase } from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';

const Nav = () => {

    const[activeNav, setActiveNav] =useState('#')
    return (
        <nav  className="anima2">
            <a  href="#"onClick={()=>setActiveNav('#')} className={activeNav === '#' ?'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ?'active' : ''}><BiUser/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ?'active' : ''}><SiKnowledgebase/></a>
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ?'active' : ''}><MdOutlineDesignServices/></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ?'active' : ''}><AiOutlineFundProjectionScreen/></a>
            <a href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ?'active' : ''}><RiContactsBookLine/></a>
            
        </nav>
    );
};

export default Nav;