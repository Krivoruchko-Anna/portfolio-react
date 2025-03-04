import React, { useState, useEffect, useCallback } from 'react';
import IconLinkedin from "../icons/IconLinkedin.tsx";
import IconGithub from '../icons/IconGithub.tsx';
import IconBehance from '../icons/IconBehance.tsx';
import IconInstagram from '../icons/IconInstagram.tsx';
import Lines from "./lines/Lines.tsx";
import "./Header.scss"

const navLinks = [
    { title: 'About', to: '#about', id: 'about' },
    { title: 'Experience', to: '#experience', id: 'experience' },
    { title: 'Projects', to: '#projects', id: 'projects' },
];

const socials = [
    { link: 'https://www.linkedin.com/in/hanna-kryvaruchka-fog', icon: IconLinkedin },
    { link: 'https://github.com/Krivoruchko-Anna?tab=repositories', icon: IconGithub },
    { link: 'https://www.behance.net/anna49fogbb16', icon: IconBehance },
    {
        link: 'https://www.instagram.com/anna49foggy/profilecard/?igsh=d3VkbXgxc2Fydzcy',
        icon: IconInstagram,
    },
];

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('about');
    const [isScrollListenerDisabled, setIsScrollListenerDisabled] = useState<boolean>(false);

    const updateActiveSection = (link: string) => {
        setActiveSection(link);
    };

    const disableListener = () => {
        setIsScrollListenerDisabled(true);

        setTimeout(() => {
            setIsScrollListenerDisabled(false);
        }, 800);
    };

    const handleScroll = useCallback(() => {
        if (isScrollListenerDisabled) return;

        const sections = ['about', 'experience', 'projects'];

        const offsets = sections.map((id) => {
            const element = document.getElementById(id);
            if (!element) return { id, offset: Infinity };
            return { id, offset: element.getBoundingClientRect().top };
        });

        const closestSection = offsets.reduce((prev, curr) =>
            Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev,
        );

        if (closestSection.id !== activeSection) {
            updateActiveSection(closestSection.id);
        }
    }, [isScrollListenerDisabled, activeSection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, isScrollListenerDisabled]);

    return (
        <div className="header">
            <Lines />

            <div className="header__info">
                <h1 className="header__name">Anna Krivoruchko</h1>
                <h2 className="header__title">Front End Developer</h2>
                <p className="header__description">
                    I build responsive, pixel-perfect web applications that deliver seamless digital
                    experiences.
                </p>
            </div>

            <nav className="header__navigation">
                <ul className="header__nav-list">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`header__nav-item ${activeSection === link.id ? 'active' : ''}`}
                            onClick={() => updateActiveSection(link.id)}
                        >
                            <a href={link.to} onClick={(e) => {
                                e.preventDefault();
                                disableListener();

                                const section = document.querySelector(link.to);
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>
                                {link.title}
                            </a>


                        </li>
                    ))}
                </ul>
            </nav>

            <ul className="header__links">
                {socials.map((social, index) => (
                    <li key={index} className="header__link">
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                            <span className="header__icon">
                                <social.icon />
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
