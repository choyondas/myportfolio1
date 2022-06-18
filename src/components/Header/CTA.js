import React from 'react';
import CV from '../../assets/CHOYON DAS RESUME.pdf';
const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn anima ">Download CV</a>
            <a href="#contact" className="btn btn-primary anima" >Connect Me</a>
        </div>
    );
};

export default CTA;