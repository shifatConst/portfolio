import React from 'react';
const Skills = () => {
    return (
        <div className="container">
            <h2>My Skills</h2>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-header">
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

                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-header">
                            Back-End
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Node.js</li>
                            <li className="list-group-item">MongoDB</li>
                            <li className="list-group-item">Express.js</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card text-center" style={{ width: "18rem" }}>
                        <div className="card-header">
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