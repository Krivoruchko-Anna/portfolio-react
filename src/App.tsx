import React, { useState, useEffect } from "react";
import { throttle } from "lodash";
import About from "./components/about/About.tsx";
import Experience from "./components/experience/Experience.tsx";
import Projects from "./components/projects/Projects.tsx";
import Header from "./components/header/Header.tsx";
import Backlight from "./components/backlight/Backlight.tsx";
import LavaLamp from "./components/lavalamp/LavaLamp.tsx";
import IconUp from "./components/icons/IconUp.tsx";

const App: React.FC  = () => {
    const [showArrow, setShowArrow] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = throttle(() => {
            setShowArrow(window.scrollY > 300);
        }, 300);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="app">
            <Backlight />
            <LavaLamp />

            <button className={`up-arrow ${showArrow ? "show" : ""}`}
                 onClick={scrollToTop}>
                <IconUp/>
            </button>

            <header>
                <Header />
            </header>

            <main className="main">
                <About />
                <Experience />
                <Projects />
            </main>
        </div>
    );
}

export default App;
