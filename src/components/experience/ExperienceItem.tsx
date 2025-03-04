import React from "react";
import { ExperienceItemType } from "./experience.ts";
import "./ExperienceItem.scss";

interface Props {
    item: ExperienceItemType;
}

const ExperienceItem: React.FC<Props> = ({ item }) => {
    return (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="experience-item">
            <div className="experience-item__date">{item.date}</div>
            <div className="experience-item__main">
                <div className="experience-item__role">{item.title}</div>
                <div className="experience-item__description">{item.description}</div>
                <div className="experience-item__stack">
                    {item.stack.map((tech) => (
                        <div key={tech} className="experience-item__stack-item">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ExperienceItem;
