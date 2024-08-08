import Image from 'next/image'
import React from 'react'

const EnterpriseSoftware = () => {
    return (
        <div className='grid'>
            <div className=" mx-auto relative w-[65vw] h-[70vh] -top-28">
                <Image src={'/images/responsive.png'} alt='reponsive' fill={true} className='drop-shadow-xl' />
            </div>
            <div className="relative -top-28 grid gap-8">
                <div className="mt-[0.5rem] font-bold text-center text-[22px] md:text-[30px] text-indigo-900">Enterprise Software</div>
                <div className=" mx-auto w-4/5 grid grid-cols-1  md:grid-cols-2 gap-8">
                    <div className="border-2 p-4">
                        <div className="mt-[0.5rem] font-bold text-[18px] md:text-[22px] text-gray-900">Highly customizable</div>
                        <div className="mt-[0.5rem] font-medium  text-[14px] md:text-[16px] text-gray-600">Use CSIT Software to automate actions, design custom screens, custom reports, or web hooks.</div>
                    </div>
                    <div className="border-2 p-4">
                        <div className="mt-[0.5rem] font-bold text-[18px] md:text-[22px] text-gray-900">Fair pricing</div>
                        <div className="mt-[0.5rem] font-medium  text-[14px] md:text-[16px] text-gray-600">No usage-based pricing, no feature upselling, no long term contracts, no hosting limits, no surprises... just a single price per user - all inclusive</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseSoftware