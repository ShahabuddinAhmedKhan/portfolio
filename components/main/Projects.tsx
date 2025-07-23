import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-0 sm:py-20 z-41"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5e4578] to-cyan-500 py-20">
                PROJECTS
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
                <div className="flex-1">
                    <ProjectCard

                        src="/astra.png"
                        title="Axtra Landing Page"
                        description="A modern, fully responsive landing page built with React, GSAP animations, ShadCN, DaisyUI, Tailwind CSS, and HTML. Optimized for four breakpoints to ensure a seamless experience across all devices.."
                        live = "https://axtra-landing-page.vercel.app/"
                        git = "https://github.com/ShahabuddinAhmedKhan/Axtra-Agency-Landing-Page"

                    />
                </div>
                <div className="flex-1 ">
                    <ProjectCard
                        src="/zeus.png"
                        title="Zeus Equipment Store"
                        description="An equipment store web app with integrated user authentication using Firebase. Built with React, Tailwind CSS, HTML, and MongoDB for seamless front-end and back-end functionality."
                        live = "https://zeus-73056.web.app/"
                        git = "https://github.com/ShahabuddinAhmedKhan/zeus-client"
                    />
                </div>

            </div>
        </div>
    );
};

export default Projects;