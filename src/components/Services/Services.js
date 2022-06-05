import React from 'react';
import './Services.css'
import { BsCheck2Circle} from 'react-icons/bs'
const Services = () => {
    return (
        <section id="services" >
            <h5 className='heading'>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services_container">



                {/* UI/UX Design */}
                <article className="service">
                    <div className="service_head">
                        <h3>
                            UI/UX Design
                        </h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                      
                    </ul>
                </article>


                {/* Web Development */}
                <article className="service">
                    <div className="service_head">
                        <h3>
                            Web Development
                        </h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                    </ul>
                </article>



                {/* Illustration */}
                <article className="service">
                    <div className="service_head">
                        <h3>
                            Illustration
                        </h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                        <li>
                            <BsCheck2Circle className='service_list_icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non!</p>
                        </li>
                       
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;