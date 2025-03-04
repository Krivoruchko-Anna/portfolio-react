import React from "react";
import ExperienceItem from "./ExperienceItem.tsx";
import { experienceData } from "./experience.ts";
import "./Experience.scss";

const Experience: React.FC = () => {
    return (
        <div id="experience" className="experience">
            <h2 className="experience__title">Experience</h2>
            <div className="experience__container">
                {experienceData.map((item) => (
                    <ExperienceItem key={item.title} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
