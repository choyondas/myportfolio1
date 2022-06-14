import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import './Experience.css'
const Experience = () => {
    return (
        <section id="experience" style={{     backgroundSize: 'cover',
    backgroundImage: `url(https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png)`,
            backgroundRepeat: 'no-repeat',
            paddingBottom: '3rem',
            backgroundPosition: 'center',
        width:'100%'}}>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon" />
                            <div>
                                 <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                           </div>

                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon" />
                            <div>
                                 <h4>CSS</h4>
                            <small className="text-light">Experienced</small>

                           </div>
                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                          
                            <div>
                                  <h4>Javascript</h4>
                            <small className="text-light">Experienced</small>
                            </div>

                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                            </div>

                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                            <div>
                                <h4>React</h4>
                            <small className="text-light">Experienced</small>
                            </div>

                        </article>
                       
                    </div>
                </div>

                {/* end of front end section */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                     <div className="experience_content">
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                            <div>
                                <h4>Node js</h4>
                            <small className="text-light">Experienced</small>
                            </div>

                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                            <div>
                                 <h4>MongoDb</h4>
                            <small className="text-light">Experienced</small>
                           </div>

                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                            <div>
                                 <h4>Python</h4>
                            <small className="text-light">Intermediate</small>
                           </div>

                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                            <div>
                                 <h4>Mysql</h4>
                            <small className="text-light">Basic</small>
                           </div>

                        </article>
                        <article className="experience_details">
                            <HiShieldCheck className="experience_details_icon"/>
                            <div>
                                 <h4>Firebase</h4>
                            <small className="text-light">Experienced</small>
                           </div>

                        </article>
                  
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;