import React from 'react';
import './Header.css'
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1> <strong>I AM <br/> GAZI SHIFAT REZA</strong> </h1>
                <Typed
                    className="typed-text"
                    strings={["Learner", "Web Developer", "Programmer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="https://drive.google.com/file/d/1Kct2C2IHMVhaPn_ap3UYy27HPKMT-Lf2/view" target="_blank" className="btn-main-offer">Get My Resume</a>
            </div>
        </div>
    );
};

export default Header;