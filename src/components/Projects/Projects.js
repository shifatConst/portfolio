import React from 'react';
import projectsData from '../../projectsData'

const Projects = () => {
    return (
        <div className="container py-5" style={{backgroundColor: "#ea907a"}}>
            <h2 className="text-center py-3">MY PROJECTS</h2>
            <div className='row'>
                {
                    projectsData.map(project =>
                        <div className='col-sm-6'>

                            <div class="card mb-3">
                                <img class="card-img-top" src={project.image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{project.name}</h5>
                                    <p class="card-text">{project.description}</p>
                                    <a href={project.demo} target="_blank" className="btn btn-primary mx-2">Demo</a>
                                    <a href={project.client} target="_blank" className="btn btn-primary mx-2">Client</a>
                                    <a href={project.server} target="_blank" className="btn btn-primary mx-2">Server</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;