import React from 'react';
import './Footer.css'

import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_Logo">CHOYON DAS</a>


            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://facebook.com"><AiFillFacebook/></a>
                <a href="https://instagram.com"><AiOutlineInstagram/></a>
                <a href="https://twitter.com"><AiFillTwitterSquare/></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; Choyon Das. All rights reserviced</small>
            </div>
        </footer>
    );
};

export default Footer;