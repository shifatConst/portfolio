import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
const Socialicon = () => {
    const iconStyle = {
        color: "#ef4035",
        height: '2.5rem',
        width: '2.5rem'
    };
    return (
        <div className="py-3">
            <a href="https://www.linkedin.com/in/shifatconst/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="mx-2" style={iconStyle} />
            </a>
            <a href="https://github.com/shifatConst/" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="mx-2" style={iconStyle} />
            </a>
            <a href="https://www.facebook.com/shifatConst/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} className="mx-2" style={iconStyle} />
            </a>
        </div>
    );
};

export default Socialicon;