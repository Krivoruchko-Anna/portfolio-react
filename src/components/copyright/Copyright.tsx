import React, { useState, useEffect } from 'react';
import "./Copyright.scss"

const Copyright: React.FC = () => {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className="copyright">
            © {currentYear} Anna Krivoruchko. <span>All Rights Reserved.</span>
        </div>
    );
};

export default Copyright;
