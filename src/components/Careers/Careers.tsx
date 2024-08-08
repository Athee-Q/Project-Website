import Image from 'next/image'
import React from 'react'
import Hiring from './Hiring'
import Perks from './Perks'


const Careers = () => {
    return (
        <div className=' pb-20 mx-auto'>
            <div className='p-10 mb-10 grid gap-12 grid-cols-1 bg-amber-50 md:grid-cols-2 mx-auto items-center justify-center'>
                <Image src={'/career/hiring.png'} alt='About us' width={400} height={400} className='drop-shadow-2xl' />
                <div className="grid">
                    <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-amber-900">Join Us</div>
                    <div className="mt-2 text-amber-600 text-[15px]">Whether you are a prospective client, partner, or potential team member, we invite you to join us on our journey of continuous growth and achievement. Together, we can harness the power of technology to transform businesses and make a positive impact on the world.</div>
                </div>
            </div>
            <div className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-center text-zinc-800 leading-10 md:leading-[4rem]' >We're Hiring!</div >
            <Hiring/>
            <Perks/>
            <section className="py-16  w-11/12 mx-auto  space-y-6">
                <div className='text-[24px] md:text-[26px] lg:text-[30px] mb-[1rem] font-bold  text-zinc-800 leading-10 md:leading-[4rem]' >Ready to Apply?</div >
                <div className="mt-4 md:text-[17px] text-[15px] text-gray-500 opacity-90 font-[400]">Please submit your resume, a brief introduction and your desired salary range to <a href='mailto:tester@gmail.com' className='font-semibold hover:underline text-indigo-600'>tester@gmail.com</a>. Please include a link if you have a GitHub account with any public projects.</div>
                <div className="mt-4 md:text-[17px] text-[15px] text-gray-500 opacity-90 font-[400]">
                    <span className='tracking-widest '>Don’t see the job you’re looking for? &nbsp;</span>
                    <a href='mailto:testing@gmail.com' className='font-semibold hover:underline text-indigo-600' >Drop us an email.</a>
                </div>

            </section>
        </div >
    )
}

export default Careers