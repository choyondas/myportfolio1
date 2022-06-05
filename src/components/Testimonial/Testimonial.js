import React from 'react';
import './Testimonial.css'
import avatar1 from "../../assets/avatar-1.jpg"
import avatar2 from "../../assets/avatar-2.jpg"
import avatar3 from "../../assets/avatar-3.jpg"
import avatar4 from "../../assets/avatar-4.jpg"
import avatar5 from "../../assets/avatar-5.jpg"


const data = [
    
    {
        avatar: avatar1,
        name: 'Max',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?',
    },
    {
        avatar: avatar2,
        name: 'Shatta Wale',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?',
    },
    {
        avatar: avatar3,
        name: 'David Mill',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?',
    },
    {
        avatar: avatar4,
        name: 'Tom',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?',
    },
    {
        avatar: avatar5,
        name: 'Noushin',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?',
    },
]


const Testimonial = () => {
    return (
        <section>
            <h5>Review From Clients</h5>
            <h2>Testimonial</h2>

            {
                data.map(({ avatar, name, review }) => {
                    return (
                         <div className="container testimonial-container">
                <article className="testimonial">
                    <div className="client_avatar">
                        <img className='avatar-image' src={avatar} alt="" />
                    </div>
                    <h5 className="client_name">{name}</h5>
                        <small className="client_review">
                            {review}
                        </small>
                </article>
                
            </div>
                  )


                })
            }

           
        </section>
    );
};

export default Testimonial;