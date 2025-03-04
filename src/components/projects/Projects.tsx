import React from "react";
import { projectsData, petProjectsData } from "./projects.ts";
import ProjectItem from "./ProjectItem.tsx";
import "./Projects.scss"

const Projects: React.FC = () => {
    return (
        <div>
            <div id="projects" className="projects">
                <h2 className="projects__title">Projects</h2>
                <div className="projects__container">
                    {projectsData.map((item) => (
                        <ProjectItem key={item.link} project={item}></ProjectItem>
                    ))}
            </div>
        </div>

            <div className="projects pet-projects">
                <h2 className="projects__title show">Just for fun</h2>
                <div className="projects__container">
                    {petProjectsData.map((item) => (
                        <ProjectItem key={item.link} project={item}></ProjectItem>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
