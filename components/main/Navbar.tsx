
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a
                    href="#about-me"
                    className="h-auto w-auto sm:flex flex-row items-center hidden"
                >
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin "
                        priority
                    />


                </a>

                <div className="w-[500px] h-full flex flex-row items-center justify-between  ">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-[13px] sm:text-xl">
                        <a href="#about-me" className="cursor-pointer">
                            About me
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Skills
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Projects
                        </a>
                        <a href="#contact" className="cursor-pointer">
                            Contacts
                        </a>
                    </div>
                </div>

                <div className="sm:flex flex-row gap-5 hidden">
                    {Socials.map((social) => (
                        <a href={social.link} target="_blank" key={social.name}>
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;