import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import "./Lines.scss"

interface Line {
    ref: React.RefObject<SVGPathElement>;
    controlPoint: number;
    initialColor: string;
    secondaryColor: string;
    isInitial: boolean;
}

const Lines: React.FC = () => {
    const [lines, setLines] = useState<Line[]>([
        {
            ref: useRef<SVGPathElement>(null),
            controlPoint: 40,
            initialColor: '#7FBED1',
            secondaryColor: '#577080',
            isInitial: true,
        },
        {
            ref: useRef<SVGPathElement>(null),
            controlPoint: 60,
            initialColor: '#D86937',
            secondaryColor: '#E9DBC9',
            isInitial: true,
        },
        {
            ref: useRef<SVGPathElement>(null),
            controlPoint: 80,
            initialColor: '#F0A728',
            secondaryColor: '#AF8260',
            isInitial: true,
        },
    ]);

    const onMouseMove = (event: React.MouseEvent<SVGPathElement>, lineIndex: number) => {
        const line = lines[lineIndex];
        if (!line.ref.current) return;

        const svgBounds = (event.target as SVGElement).getBoundingClientRect();
        const mouseX = event.clientX - svgBounds.left;
        const maxOffset = 50;
        const centerX = line.controlPoint;

        const newControlPoint = Math.min(
            Math.max(centerX + (mouseX - centerX) * 0.9, centerX - maxOffset),
            centerX + maxOffset
        );

        const newLines = [...lines];
        newLines[lineIndex].isInitial = !newLines[lineIndex].isInitial;
        const color = newLines[lineIndex].isInitial ? newLines[lineIndex].initialColor : newLines[lineIndex].secondaryColor;
        setLines(newLines);

        gsap.to(line.ref.current, {
            duration: 0.2,
            attr: {
                d: `M ${line.controlPoint},0 Q ${newControlPoint},500 ${line.controlPoint},1000`,
            },
            stroke: color,
            ease: 'power1.out',
        });
    };

    const onLeave = (lineIndex: number) => {
        const line = lines[lineIndex];
        if (!line.ref.current) return;

        const color = line.isInitial ? line.secondaryColor : line.initialColor;

        gsap.to(line.ref.current, {
            duration: 0.9,
            attr: {
                d: `M ${line.controlPoint},0 Q ${line.controlPoint},500 ${line.controlPoint},1000`,
            },
            stroke: color,
            ease: 'bounce.out',
        });
    };

    return (
        <div className="lines">
            <div className="container">
                <svg className="line-container" width="100" height="100%" viewBox="0 0 100 1000">
                    {lines.map((line, index) => (
                        <path
                            key={index}
                            ref={line.ref}
                            className="line"
                            d={`M ${line.controlPoint},0 Q ${line.controlPoint},500 ${line.controlPoint},1000`}
                            fill="transparent"
                            stroke={line.initialColor}
                            strokeWidth="2"
                            onMouseLeave={() => onLeave(index)}
                            onMouseMove={(event) => onMouseMove(event, index)}
                        />
                    ))}
                </svg>
            </div>

            <div className="mobile-lines">
                {lines.map((_, index) => (
                    <div key={`mobile-${index}`} className={`mobile-line line-${index + 1}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Lines;
