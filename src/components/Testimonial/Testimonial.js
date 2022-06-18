import React from 'react';
import './Testimonial.css'
import avatar1 from "../../assets/avatar-1.jpg"
import avatar2 from "../../assets/avatar-2.jpg"
import avatar3 from "../../assets/avatar-3.jpg"
import avatar4 from "../../assets/avatar-4.jpg"
import avatar5 from "../../assets/avatar-5.jpg"
// import Swiper core and required modules
import { Autoplay,Pagination,EffectCoverflow  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';


const data = [
    
    {
        avatar: avatar5,
        
        name: 'Asal Mshk',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officia asperiores, nulla officiis optio amet molestiae natus vero accusantium corporis unde, nemo ducimus, corrupti quis? Laudantium delectus dolor nostrum tempore!',
    },
    {
        avatar: avatar2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officia asperiores, nulla officiis optio amet molestiae natus vero accusantium corporis unde, nemo ducimus, corrupti quis? Laudantium delectus dolor nostrum tempore!',
    },
    {
        avatar: avatar3,
        name: 'David Mill',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officia asperiores, nulla officiis optio amet molestiae natus vero accusantium corporis unde, nemo ducimus, corrupti quis? Laudantium delectus dolor nostrum tempore!',
    },
    {
        avatar: avatar4,
        name: 'Magnet',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officia asperiores, nulla officiis optio amet molestiae natus vero accusantium corporis unde, nemo ducimus, corrupti quis? Laudantium delectus dolor nostrum tempore!',
    },
    {
        avatar: avatar1,
        name: 'Max',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officia asperiores, nulla officiis optio amet molestiae natus vero accusantium corporis unde, nemo ducimus, corrupti quis? Laudantium delectus dolor nostrum tempore!',
    },
]


const Testimonial = () => {
    return (
        <section id="testimonial">
            <Roll right>
            <h5>Review From Clients</h5>
                <h2>Testimonial</h2>
                </Roll>

           
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
         className="container testimonial-container"
             
            >
                
                 {
                data.map(({ avatar, name, review }, index) => {
                    return (
                        <Slide bottom >
                <SwiperSlide key={index} className="testimonial">
                    <div className="client_avatar">
                        <img className='avatar-image' src={avatar} alt="" />
                    </div >
                            <div className="testText">
                                <h3 className="client_name">{name}</h3>
                        <small className="client_review">
                            {review}
                        </small>
                    </div>
                            </SwiperSlide>
                            </Slide>
                
            
                  )


                })
            }
</Swiper>
           
        </section>
    );
};

export default Testimonial;