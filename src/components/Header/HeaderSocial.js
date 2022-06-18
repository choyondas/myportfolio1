import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
const HeaderSocial = () => {
    return (
        <div className="header_socials anima">
            <a href="https://www.linkedin.com/in/choyon-das-002a82201/" target="_blank" ><BsLinkedin/></a>
            <a href="https://github.com/choyondas" target="_blank" ><BsGithub/></a>
            <a href="https://www.facebook.com/liptondas.liptondas.3" target="_blank" ><BsFacebook/></a>
            
        </div>
    );
};

export default HeaderSocial;