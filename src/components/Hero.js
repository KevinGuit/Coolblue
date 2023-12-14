import React from 'react'
import { ReactComponent as Arrow_right } from '../icons/arrow-right.svg';

const Hero = () => {
    return (
        <div class="h-[866px] mt-[64px] bg-Alpha-100">
            <div className="flex items-center h-full max-w-[583px] pl-60">
                <div className='flex flex-col gap-5'>
                    <div className="text-Gamma-300 text-xl font-semibold leading-normal">Leerpad</div>
                    <div className=""><span className="text-Alpha-700 text-[64px] font-extrabold font-['Lato'] leading-[64px]">I’m Blue </span><span className="text-Alpha-300 text-[64px] font-extrabold font-['Lato'] leading-[64px]">(onboarding)</span></div>
                    <div className="text-Gamma-500 text-lg font-normal leading-[25.20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor auctor tellus aenean dis erat auctor. Amet fermentum sagittis gravida elit habitant enim aliquet ornare.</div>
                    <button className="px-8 py-6 max-w-[163px] bg-Green-100 rounded shadow-inner hover:opacity-60 mt-12">
                        <div className="flex items-center text-White text-base font-bold leading-none whitespace-nowrap overflow-hidden gap-x-2">Start nu <Arrow_right/></div>
                </button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Hero