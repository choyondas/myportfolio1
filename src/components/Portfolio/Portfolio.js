import React from 'react';
import './Portfolio.css'

import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'
import IMG4 from '../../assets/portfolio-4.png'
import IMG5 from '../../assets/portfolio-5.png'
import IMG6 from '../../assets/portfolio-6.png'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Health Care Center',
        github: 'https://github.com/choyondas',
        live:''
    },
    {
        id: 2,
        image: IMG2,
        title: 'Food Corner',
        github: 'https://github.com/choyondas',
        live:''
    },
    {
        id: 3,
        image: IMG3,
        title: 'Professional Handyman services',
        github: 'https://github.com/choyondas',
        live:''
    },
    {
        id: 4,
        image: IMG4,
        title: 'Nike shoe store',
        github: 'https://github.com/choyondas',
        live:''
    },
    {
        id: 5,
        image: IMG5,
        title: 'Shoe corner',
        github: 'https://github.com/choyondas',
        live:''
    },
    {
        id: 6,
        image: IMG6,
        title: 'Online Marketing',
        github: 'https://github.com/choyondas',
        live:'google.com'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">

                {
                    data.map(({ id, image, title, github, live }) => {
                        return (
                            <article key ={id} className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={image} alt={title} />
                    </div> 
                    <h3>{title}</h3>
                    <div className="portfolio_item_cta">
                          <a href={github} className='btn' target="_blank">Github</a>
                    <a href={live} className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                </article>
                       )
                   })
                    
                }


               
               
            </div>
        </section>
    );
};

export default Portfolio;