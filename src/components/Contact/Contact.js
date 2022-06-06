import React from 'react';
import './Contact.css'

import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>


            <div className="container contact_container">
                <div className="contact_options1">
                    <article className="contact_option">
                        <HiOutlineMail/>
                        <h4>Email</h4>
                        <h5>choyondas08@gmail.com</h5>
                        <a href="mailto:choyondas08@gmail.com"target="_blank"> Send A Message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerFill/>
                        <h4>Messenger</h4>
                        <h5>Choyon Das</h5>
                        <a href="https://m.me/liptondas.liptondas.3" target="_blank"> Send A Message</a>
                    </article>
                    <article className="contact_option">
                        <IoLogoWhatsapp/>
                        <h4>Whatsapp</h4>
                        <h5>+86-13085375070</h5>
                        <a href="https://api.whatsapp.com/send?phone+8613085375070"target="_blank"> Send A Message</a>
                    </article>
                </div>

                {/* END OF CONTACTION  */}


                <form action="">
                    <input type="text" name='name' placeholder=" Your Name" required />
                    <input type="email" name="email" id="" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required rows="10"></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>

                </form>
            </div>
        </section>
    );
};

export default Contact;