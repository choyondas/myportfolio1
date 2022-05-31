import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { SiKnowledgebase } from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';
const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><BiUser/></a>
            <a href="#experience"><SiKnowledgebase/></a>
            <a href="#services"><MdOutlineDesignServices/></a>
            <a href="#contact"><RiContactsBookLine/></a>
            
        </nav>
    );
};

export default Nav;