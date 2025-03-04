import React from 'react';
import './LavaLamp.scss';

const LavaLamp: React.FC = () => {
    return (
        <div className="lava-lamp">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
            <div className="circle circle6"></div>

            <div className="circle-m circle7"></div>
            <div className="circle-m circle8"></div>
        </div>
    );
};

export default LavaLamp;
