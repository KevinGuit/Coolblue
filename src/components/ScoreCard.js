import React from 'react'

const Card = () => {
  return (
    <div className="w-[280px] h-[380px] flex-col justify-start items-start inline-flex">
        <div className="w-[280px] h-[380px] px-8 py-10 bg-White rounded-lg backdrop-blur-[44px] flex-col justify-between items-start flex">
            <div className="text-center text-Alpha-700 text-2xl font-bold  leading-[28.80px]">Jouw score.</div>
            <div className="w-[212px] h-[212px] relative">
                <div className="w-[212px] h-[212px] left-0 top-0 absolute opacity-10 bg-Beta-300 rounded-full" />
                <div className="w-[212px] h-[212px] left-[-0px] top-[212px] absolute origin-top-left -rotate-90 rounded-full border-4 border-Gamma-300" />
                <div className="left-[51.29px] top-[65px] absolute flex-col justify-center items-center gap-1.5 inline-flex">
                    <div className="text-center text-Alpha-700 text-lg font-bold leading-[18px]">XP</div>
                    <div className="text-center text-Alpha-700 text-5xl font-bold leading-[57.60px]">2000</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card

