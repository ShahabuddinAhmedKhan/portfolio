import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Skill_data,
} from "@/constants";
import React from "react";


import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 min-h-screen w-full relative overflow-hidden pb-80 py-20 mt-10 z-40"
        //   style={{ transform: "scale(0.9)" }}
        >
            <SkillText />

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image?.Image}
                        
                        index={index}
                    />
                ))}
            </div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        // width={image.width}
                        // height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        // width={image.width}
                        // height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        // width={image.width}
                        // height={image.height}
                        index={index}
                    />
                ))}
            </div>
            {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image?.Image}
                        // width={image?.width}
                        // height={image?.height}
                        index={index}
                    />
                ))}
            </div> */}

            <div className="w-full h-full absolute ">
                <div className="w-full h-full z-[-10] opacity-30 absolute top-30 sm:top-25 left-0 flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-full"
                        preload="auto"
                        playsInline
                        loop
                        
                        muted
                        
                        autoPlay
                        src="https://res.cloudinary.com/dd3ln5wij/video/upload/br_2452k,vc_h264/v1753293587/skills_wrls5d.mp4"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;