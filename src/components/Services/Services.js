import React from 'react';
import './Services.css'
import { BsCheck2Circle } from 'react-icons/bs';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
const Services = () => {
    return (
        <section id="services">
            <Roll right>
            <h5 className='heading'>What I Offer</h5>
                <h2>Services</h2>
                </Roll>

            <div className="container services_container">



                {/* UI/UX Design */}
                <Bounce left duration={4000}>
                <article className="service">
                    <div className="service_head">
                        <h3>
                            UI/UX Design
                        </h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Visual Design</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Interactive & Animation Design</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Adapt For All Devices</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Implementing A Brand</p>
                        </li>
                      
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Strategy & Content</p>
                        </li>
                      
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Wireframing & Prototyping</p>
                        </li>
                      
                    </ul>
                    </article>
                    </Bounce>


                {/* Web Development */}
                <Bounce bottom duration={4000}>
                <article className="service">
                    <div className="service_head">
                        <h3>
                            Web Development
                        </h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Web Design & Development</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>E-commerce Development</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Open Source Development</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Custome Development</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Payment Get Way</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>CMS Website</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Social Media Website</p>
                        </li>
                    </ul>
                    </article>
                    </Bounce>



                {/* Illustration */}
                <Bounce right duration={4000}>
                <article className="service">
                    <div className="service_head">
                        <h3>
                            Illustration
                        </h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Vector Illustration</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Portrait Illustration</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Children's Book Illustration</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Product Illustration</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Architectural Illustration</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Magazine Illustration</p>
                        </li>
                       
                    </ul>
                    </article>
                    </Bounce>
            </div>
        </section>
    );
};

export default Services;