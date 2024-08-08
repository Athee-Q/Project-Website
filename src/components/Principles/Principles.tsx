import React from 'react'
import PrincipleCard from './PrincipleCard'
import img1 from '../../../public/images/handshake.png'
import img2 from '../../../public/images/target.png'
import img3 from '../../../public/images/satisfaction.png'

const Principle = () => {
    return (
        <div className='pt-20 pb-12'>
            <div className="mt-[0.5rem] font-bold text-[22px] text-center md:text-[30px] text-indigo-900">The core values and principles that drive us</div>

            {/* Principle Card */}
            <div className="w-4/5 mx-auto grid pt-24 gap-8 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center ">
                <PrincipleCard bg='bg-gray-200' title='Long-term commitment' num='1' image={img1} description='25+ years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that’s powered by you, our customer.' />
                <PrincipleCard bg='bg-green-500' title='Focus on research and development' num='2' image={img2} description='Software is our craft and we back it up with our relentless investments in R&D. So much so that we prefer to own the entire technology stack, including running our data centers globally.' />
                <PrincipleCard bg='bg-amber-400' title='Customer-first philosophy' num='3' image={img3} description="In all these years, it's our customers' trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we're here to help you grow." />
            </div>
        </div>
    )
}

export default Principle