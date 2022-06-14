import React from 'react';
import './About.css'
import myphoto from '../../assets/CH.JPG'
import { BsAward } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { MdGroupWork } from 'react-icons/md';

const About = () => {
    return (
        <section id='about' className='aboutSection'style={{     backgroundSize: 'cover',
    backgroundImage: `url(https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'}}>
            <h5>Get To Know </h5>
            <h2>About Me</h2>


            <div className="about_container container">
                
                <div className="about_content">
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

                    <p className="about-text">
                        It's been more than 2 years I have been working in web development. I currently aim to learn as much as I can in a work environment and to further my own abilities in a professional setting. I enjoy working collaboratively but can also run with projects on my own. Excited to join a company and start a new journey.
                    </p>

                    <a href="#contact" className="btn btn-primary talkbtn ">Let's Talk</a>
                </div>
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={myphoto} alt="about image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;