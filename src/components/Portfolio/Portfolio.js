import React from 'react';
import './Portfolio.css';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

import IMG1 from '../../assets/portfolio-1.png';
import IMG2 from '../../assets/portfolio-2.png';
import IMG3 from '../../assets/portfolio-3.png';
import IMG4 from '../../assets/portfolio-4.png';
import IMG5 from '../../assets/portfolio-5.png';
import IMG6 from '../../assets/portfolio-6.png';



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Educational App',
        github: 'https://github.com/choyondas/education',
        live:'https://myedu1234.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Foody',
        github: 'https://github.com/choyondas/Foody',
        live:'https://zesty-piroshki-ad9df1.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Portfolio',
        github: 'https://github.com/choyondas/myportfolio1',
        live:'https://choyon15-portfolio.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Tour Bd',
        github: 'https://github.com/choyondas/TourBD',
        live:'https://tourmaline-conkies-56594b.netlify.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Animation',
        github: 'https://github.com/choyondas/animation-food',
        live:'https://lively-quokka-41d9b9.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Watch Store',
        github: 'https://github.com/choyondas/assignment12watchshop',
        live:'https://doctors-portal-c9ad8.web.app/'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <Roll left>
            <h5>My Recent Works</h5>
                <h2>Portfolio</h2>
            </Roll>
            
            <div className="container portfolio_container">

                {
                    data.map(({ id, image, title, github, live }) => {
                        return (
                            <Rotate top right>
                            <article key={id} className="portfolio_item">
                                <Fade right duration={4000}>
                    <div className="portfolio_item_image">
                        <img src={image} alt={title} />
                    </div> 
                    <h3>{title}</h3>
                    <div className="portfolio_item_cta">
                          <a href={github} className='btn' target="_blank">Github</a>
                    <a href={live} className='btn btn-primary' target="_blank"> Live Demo</a>
                  </div>
                                </Fade>
                                </article>
                                </Rotate>
                       )
                   })
                    
                }
 </div>
                 
        </section>
    );
};

export default Portfolio;