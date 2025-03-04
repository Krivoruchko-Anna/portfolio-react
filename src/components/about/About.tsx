import React, { useRef } from "react";
import { gsap } from "gsap";
import { throttle } from "lodash";
import "./About.scss";

const About: React.FC = () => {
    const photoRef = useRef<HTMLImageElement | null>(null);
    const circleRef = useRef<HTMLDivElement | null>(null);

    const getRandomSign = (): number => (Math.random() < 0.5 ? -100 : 100);

    const bounceEffect = throttle(() => {
        if (!photoRef.current || !circleRef.current) return;

        const randomX = getRandomSign();
        const randomY = getRandomSign();

        gsap.fromTo(
            photoRef.current,
            { y: 0, x: 0 },
            {
                scale: 0.85,
                y: randomY,
                x: randomX,
                skewX: 25,
                skewY: 25,
                duration: 0.1,
                ease: "elastic.out",
                yoyo: true,
                repeat: 1,
            }
        );

        gsap.fromTo(
            circleRef.current,
            { y: 0, x: 0 },
            {
                scale: 0.9,
                y: 0,
                x: 0,
                skewX: 0,
                skewY: 0,
                duration: 0.1,
                ease: "elastic.out",
                yoyo: true,
                repeat: 1,
            }
        );
    }, 900);

    return (
        <div id="about" className="about">
            <h2 className="about__title">About</h2>

            <div className="about__container">
                <div ref={circleRef} className="about__circle"></div>
                <img
                    src="/main_photo.png"
                    className="about__photo"
                    alt="main-photo"
                    ref={photoRef}
                    onClick={bounceEffect}
                />

                <div className="about__info">
                    <p>
                        I am a Frontend Developer with over three years of commercial experience, specializing in
                        creating dynamic and user-friendly web applications using modern technologies like Vue.js,
                        TypeScript, and Lit. Throughout my career, I have worked on diverse projects ranging from
                        international trading platforms and online education tools to charity initiatives and
                        cutting-edge monitoring solutions. My work focuses on delivering seamless user experiences
                        by developing efficient features, optimizing performance, and maintaining high-quality
                        code standards.
                    </p>
                    <p>
                        Collaboration and continuous learning are at the heart of my approach. I thrive in Agile
                        environments, actively participating in planning, code reviews, and technical discussions
                        to ensure successful project outcomes. Outside of work, I enjoy expressing creativity
                        through making silver jewelry, exploring new places while traveling, and immersing myself
                        in music and books.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
