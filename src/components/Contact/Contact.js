
import './Contact.css'
import React, { useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerFill } from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
const Contact = () => {
    const form = useRef();

      const sendEmail = (e) => {
    e.preventDefault();

          emailjs.sendForm('service_6zol8lh', 'template_yxuu28c', form.current, 'user_RuWm0sqkqeCIfMyzyf4yw')
              .then((result) => {
                  console.log(result.text);
                  alert('Email sent successfully');
              }, (error) => {
                  console.log(error.text);
              });
          e.target.reset();
  };
    return (
        <section id="contact">
            <Roll left>
            <h5>Get in Touch</h5>
                <h2>Contact Me</h2>
                </Roll>


            <div className="container contact_container">
                <div className="contact_options1">
                    <Bounce top duration={3000}>
                    <article className="contact_option">
                        <HiOutlineMail/>
                        <h4>Email</h4>
                        <h5>choyondas08@gmail.com</h5>
                        <a href="mailto:choyondas08@gmail.com"target="_blank"> Send A Message</a>
                        </article>
                    </Bounce>
                    <Bounce left duration={3000}>
                    <article className="contact_option">
                        <RiMessengerFill/>
                        <h4>Messenger</h4>
                        <h5>Choyon Das</h5>
                        <a href="https://m.me/liptondas.liptondas.3" target="_blank"> Send A Message</a>
                        </article>
                    </Bounce>
                    <Bounce bottom duration={3000}>
                    <article className="contact_option">
                        <AiFillLinkedin/>
                        <h4>LinkedIn</h4>
                        <h5>Choyon Das</h5>
                        <a href="https://www.linkedin.com/in/choyon-das-002a82201/"target="_blank"> Send A Message</a>
                        </article>
                        </Bounce>
                </div>

                {/* END OF CONTACTION  */}
                <LightSpeed right duration={3000}>


                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder=" Your Name" required />
                    <input type="email" name="email" id="" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required rows="10"></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>

                    </form>
                    </LightSpeed>
            </div>
        </section>
    );
};

export default Contact;