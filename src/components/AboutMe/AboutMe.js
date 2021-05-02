import React from 'react';
import shifatDP from '../../Images/ShifatDP.png'
import Socialicon from '../Socialicon/Socialicon';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="container py-5 kon">
            <div className="row text-center">
                <div className="col-sm-6">
                    <img className="profile-img" src={shifatDP} alt=""/>
                    <h3 className="mt-4">Connect With Me</h3>
                    <Socialicon></Socialicon>
                </div>
                <div className="col-sm-6">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates impedit repudiandae dolore maxime saepe, beatae praesentium quia reprehenderit architecto distinctio possimus dignissimos libero expedita error nihil natus assumenda corporis voluptatum recusandae quis culpa vitae! Obcaecati in temporibus laborum deserunt.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;