import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
    return (
        <div id='about-me' className='relative flex flex-col h-full w-full '>
            <video 
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            className='rotate-180 absolute 2xl:top-[-480px] lg:top-[-280px] xlg:top-[-380px] md:top-[-180px] sm:top-[-100px] top-[-50px] left-0 z-[-1] w-full object-cover'>
                <source src='https://res.cloudinary.com/dd3ln5wij/video/upload/br_2420k,vc_h264/v1753292849/galaxy_hkxg1a.mp4' type='video/mp4' />

            </video>
            <HeroContent></HeroContent>
            
        </div>
    );
};

export default Hero;