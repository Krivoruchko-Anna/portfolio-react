import React from 'react';
import './LavaLamp.scss';

const LavaLamp: React.FC = () => {
    const circleClasses = ['circle1', 'circle2', 'circle3', 'circle4', 'circle5', 'circle6'];
    const circleMClasses = ['circle7', 'circle8'];

    return (
        <div className="lava-lamp">
            {circleClasses.map((circleClass, index) => (
                <div key={index} className={`circle ${circleClass}`} />
            ))}

            {circleMClasses.map((circleClass, index) => (
                <div key={index} className={`circle-m ${circleClass}`} />
            ))}
        </div>
    );
};

export default LavaLamp;
