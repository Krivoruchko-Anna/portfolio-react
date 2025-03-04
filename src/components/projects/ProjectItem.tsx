import React from "react";
import { ProjectItemType } from "./projects.ts";
import "./ProjectItem.scss"

interface Props {
    project: ProjectItemType
}

const ProjectItem: React.FC<Props> = ({project}) => {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-item">
            <img src={`/projects/${project.image}.jpg`} className="project-item__image" alt={project.title} />

            <div className="project-item__info">
                <div className="project-item__title">{ project.title }</div>
                <div className="project-item__description">{ project.description }</div>
            </div>
        </a>
    )
}

export default ProjectItem;
