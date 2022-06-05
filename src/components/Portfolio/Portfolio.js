import React from 'react';
import './Portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="" />
                    </div> 
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item_cta">
                          <a href="https://github.com" className='btn' target="_blank">Github</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="" />
                    </div> 
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item_cta">
                          <a href="https://github.com" className='btn' target="_blank">Github</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="" />
                    </div> 
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item_cta">
                          <a href="https://github.com" className='btn' target="_blank">Github</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="" />
                    </div> 
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item_cta">
                          <a href="https://github.com" className='btn' target="_blank">Github</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="" />
                    </div> 
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item_cta">
                          <a href="https://github.com" className='btn' target="_blank">Github</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="" />
                    </div> 
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item_cta">
                          <a href="https://github.com" className='btn' target="_blank">Github</a>
                    <a href="https://github.com" className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                </article>
               
            </div>
        </section>
    );
};

export default Portfolio;