"use client";
import Lottie from "lottie-react";
import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaDiscord,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import upward from "../../public/Upwards.json"
import { CiPhone } from "react-icons/ci";

const Footer = () => {
    return (
        <div id="contact" className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-100">
            <div className="w-full flex items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
                    {/* Contact */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">To Reach Out</div>

                        <a
                            href="mailto:Shawon2012.sk@gmail.com"
                            className="flex items-center my-[15px] cursor-pointer text-[15px] hover:scale-110"
                        >
                            <IoIosMail />
                            <span className="ml-[6px] ">Mail: Shawon2012.sk@gmail.com</span>
                        </a>

                        <a
                            href="tel:+8801716667806"
                            className="flex items-center my-[15px] cursor-pointer text-[15px] hover:scale-110"
                        >
                            <span className="ml-[6px] flex gap-2 items-center"><FaPhoneAlt className="text-xs"/> Phone: +8801716667806</span>
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>

                        <a
                            href="https://www.instagram.com/zeusinee/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center my-[15px] cursor-pointer text-[15px] hover:scale-110"
                        >
                            <FaInstagram />
                            <span className="ml-[6px]">Instagram</span>
                        </a>

                        <a
                            href="https://www.facebook.com/shawon.bin.sayed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center my-[15px] cursor-pointer text-[15px] hover:scale-110"
                        >
                            <FaFacebook />
                            <span className="ml-[6px]">Facebook</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/shahabuddinahmedkhan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center my-[15px] cursor-pointer text-[15px] hover:scale-110"
                        >
                            <FaLinkedin />
                            <span className="ml-[6px]">LinkedIn</span>
                        </a>
                    </div>
                </div>
                <a href="#about-me">
                    <Lottie animationData={upward} loop={true} className="w-40"/>
                </a>
            </div>
        </div>
    );
};

export default Footer;