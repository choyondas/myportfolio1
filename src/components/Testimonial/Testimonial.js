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



const data = [
    
    {
        avatar: avatar5,
        
        name: 'Asal Mshk',
        review: 'We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Thrive has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on monthly reports so we know how our site is doing. ',
    },
    {
        avatar: avatar2,
        name: 'Shatta Wale',
        review: 'We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Choyon the first time I would not have had to do it twice.',
    },
    {
        avatar: avatar3,
        name: 'David Mill',
        review: 'The attention to detail with Thrive’s professional staff is incredible. The entire team has proven to be very innovative and will work with ideas that I have as well and think of new ways to bring more traffic to our site in ways I would never have considered. Their pricing structure is unique and logical saving me money and achieving measurable results at the same time.',
    },
    {
        avatar: avatar4,
        name: 'Magnet',
        review: 'We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Thrive has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on monthly reports so we know how our site is doing.',
    },
    {
        avatar: avatar1,
        name: 'Max',
        review: 'The attention to detail with Thrive’s professional staff is incredible. The entire team has proven to be very innovative and will work with ideas that I have as well and think of new ways to bring more traffic to our site in ways I would never have considered. Their pricing structure is unique and logical saving me money and achieving measurable results at the same time.',
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
                            
                
            
                  )


                })
            }
</Swiper>
           
        </section>
    );
};

export default Testimonial;