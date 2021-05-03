import React from 'react';
import './skill.css'
const Skills = () => {
    return (
        <div className="container skill-style" id="skills">
            <h2 className="text-center">MY SKILLS</h2>
            <div className="row">
                <div className="col-sm-4 my-3">
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-header" style={{ backgroundColor: "#ea907a" }}>
                            Front-End
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">HTML</li>
                            <li className="list-group-item">CSS</li>
                            <li className="list-group-item">JavaScript/ES6</li>
                            <li className="list-group-item">React.js</li>
                            <li className="list-group-item">Bootstrap</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-4 my-3">
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-header" style={{ backgroundColor: "#ea907a" }}>
                            Back-End
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Node.js</li>
                            <li className="list-group-item">MongoDB</li>
                            <li className="list-group-item">Express.js</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-4 my-3">
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-header" style={{ backgroundColor: "#ea907a" }}>
                            Hosting
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Netlify</li>
                            <li className="list-group-item">Heroku</li>
                            <li className="list-group-item">Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;