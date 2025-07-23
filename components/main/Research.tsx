import React from "react";

import ResearchCard from "../sub/ResearchCard";


const Research = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-0 sm:py-20 z-41"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5e4578] to-cyan-500 py-20">
                RESEARCH
            </h1>
            <div className="h-full w-full flex  flex-col gap-10 px-10 ">
                <div className="flex-1 ">
                    <ResearchCard

                        src="/disease.png"
                        title="Neurodegenerative Disease Detection Deep Learning Model "
                        description="Our SadNetV1, a hybrid deep learning model combining MobileNetV2 with custom layers and Spatial Attention, achieving 97% accuracy on emotion recognition. Leveraged data augmentation and Grad-CAM for model explainability—using tools such as PyTorch, TorchVision, OpenCV, Scikit-learn, Matplotlib, and Seaborn throughout the workflow."
                        
                        git = "https://github.com/ShahabuddinAhmedKhan/Neurodegenerative-Disease-Detection-Deep-Learning-Model"

                    />
                </div>
                {/* <div className="flex-1 ">
                    <ResearchCard
                        src="/zeus.png"
                        title="Zeus Equipment Store"
                        description="An equipment store web app with integrated user authentication using Firebase. Built with React, Tailwind CSS, HTML, and MongoDB for seamless front-end and back-end functionality."
                        live = "https://zeus-73056.web.app/"
                        git = "https://github.com/ShahabuddinAhmedKhan/zeus-client"
                    />
                </div> */}

            </div>
        </div>
    );
};

export default Research;