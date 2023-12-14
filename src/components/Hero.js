import React from 'react'
import { ReactComponent as Arrow_right } from '../icons/arrow-right.svg';
import image_spotlight from '../images/image-spotlight.png';
import Card from './ScoreCard';

const Hero = () => {
    return (
        <div className="w-full h-[866px] mt-[70px] bg-Alpha-100">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className="flex items-center justify-center h-full max-w-[583px] pl-20 mt-5 mb-14">
                    <div className='flex flex-col gap-5'>
                        <div className="text-Gamma-300 text-xl font-semibold leading-normal">Leerpad</div>
                        <div className=""><span className="text-Alpha-700 text-[64px] font-extrabold font-['Lato'] leading-[64px]">I’m Blue </span><span className="text-Alpha-300 text-[64px] font-extrabold font-['Lato'] leading-[64px]">(onboarding)</span></div>
                        <div className="text-Gamma-500 text-lg font-normal leading-[25.20px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor auctor tellus aenean dis erat auctor. Amet fermentum sagittis gravida elit habitant enim aliquet ornare.</div>
                        <button className="px-8 py-6 max-w-[163px] bg-Green-100 rounded shadow-inner hover:opacity-60 mt-6">
                            <div className="flex items-center text-White text-base font-bold leading-none whitespace-nowrap overflow-hidden gap-x-2">Start nu <Arrow_right/></div>
                    </button>
                    </div>
                </div>
                <div className='relative w-full h-auto'>
                    <img className="z-0" src={image_spotlight} alt="https://via.placeholder.com/790x612"/>
                    <div className="absolute top-2/3 left-10">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero