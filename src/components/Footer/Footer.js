import React from 'react';
import './Footer.css'

import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer_Logo">CHOYON DAS</a>


            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/liptondas.liptondas.3"><AiFillFacebook/></a>
                <a href="https://www.instagram.com/lipton_das/"><AiOutlineInstagram/></a>
                <a href="https://twitter.com/ChoyonDas17"><AiFillTwitterSquare/></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; Choyon Das. All rights reserviced</small>
            </div>
            
        </footer>
    );
};

export default Footer;