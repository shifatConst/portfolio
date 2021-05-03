import React from 'react';
import shifatDP from '../../Images/ShifatDP.png'
import Socialicon from '../Socialicon/Socialicon';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="container style" id="about-me">
            <div className="row text-center">
                <div className="col-sm-6">
                    <img className="profile-img" src={shifatDP} alt="" />
                    <h3 className="mt-4">Connect With Me</h3>
                    <Socialicon></Socialicon>
                </div>
                <div className="col-sm-6">
                    <div className="px-3">
                        <h3>ABOUT ME</h3>
                        <p>Hi I am Gazi Shifat Reza, a 22 years old boy from Dhaka, Bangladesh. I have been specialized in web programming and Front-End development. Also, I have gathered vast knowledge about using coding, designing, markup languages and other things that are related to this sector. Also I never give up and constantly learn new skills and gather more knowledge to be better version of me. <br/> Feel free to take a look at my most recent projects on my work page. Also you can stop and say hello at shifatreza44@gmail.com and If you'd like me to get involved with helping your business grow, I'm all ears.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;