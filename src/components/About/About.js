import React from 'react';
import './About.css';
import myphoto from '../../assets/CH.JPG';
import { BsAward } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { MdGroupWork } from 'react-icons/md';

import { Parallax } from "react-parallax";
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import Jump from 'react-reveal/Jump';
import Shake from 'react-reveal/Shake';
import Slide from 'react-reveal/Slide';

const About = () => {
    return (
        // <Parallax
        //     blur={{ min: -30, max: 30 }}
        //   bgImage={require("../../assets/CH.JPG")}
        //   bgImageAlt=""
        //   strength={-200}
        
        
        // >
             <section id='about' className='aboutSection'>
            <Roll left>
                 <h5>Get To Know </h5>
            <h2>About Me</h2>

           </Roll>

            <div className="about_container container">
                
                <div className="about_content">
                     <LightSpeed left duration={2000}>
                    <div className="about_cards">
                        <article className="about_card">
                            <BsAward className="about_card_icon"></BsAward>
                            <h5>Experience</h5>
                            <small>2+ Years Working </small>
                        </article>
                        <article className="about_card">
                            <FaUsers className="about_card_icon"></FaUsers>
                            <h5>Clients</h5>
                            <small>20+ worldwide</small>
                        </article>
                        <article className="about_card">
                            <MdGroupWork className="about_card_icon"></MdGroupWork>
                            <h5>Projects</h5>
                            <small>30+ completed</small>
                        </article>
                        </div>
                    </LightSpeed>
                    <Jump duration={5000}>

                    <p className="about-text">
                        It's been more than 2 years I have been working in web development. I currently aim to learn as much as I can in a work environment and to further my own abilities in a professional setting. I enjoy working collaboratively but can also run with projects on my own. Excited to join a company and start a new journey.
                        </p>
                    </Jump>
                    <Shake duration={5000}>

                        <a href="#contact" className="btn btn-primary talkbtn ">Let's Talk</a>
                        </Shake>
                </div>
                 <Slide right duration={4000}>
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={myphoto} alt="about image" />
                    </div>
                </div>
                </Slide>
                
            </div>
            
        </section>
        // </Parallax>
    );
};

export default About;