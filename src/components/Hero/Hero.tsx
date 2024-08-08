'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../Button/Button'

interface HeroFeat{
    image: string
    title: string
    description: string
  }
const Hero = () => {
    const [heroFeats, setHeroFeats] = useState<HeroFeat[]>([]);

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/heroFeats');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);

            setHeroFeats(data);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }
    return (
        <div className="bg-gray-50 grid grid-cols-1 lg:grid-cols-7 items-center gap-8 p-8">
            <div className="lg:col-span-4 flex flex-col gap-4 items-start justify-center">
                <div className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-zinc-800 leading-10 md:leading-[4rem]' >Welcome to CSIT - Empowering Your Digital Future</div >
                <div className="mt-4 md:text-[17px] text-[15px] text-black opacity-90 font-[400]">At CSIT (Cyber Storm Info Tech), we specialize in delivering cutting-edge software solutions tailored to meet your unique needs. Whether you're looking for mobile apps, Windows software, or robust websites, we're here to transform your vision into reality.</div>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Button variant='solid'>Get Started for free</Button>
                    {/* <ButtonRed text='Explore Features' /> */}
                </div>
            </div>
            <div className="lg:col-span-3 w-11/12 mx-auto ">
                <div className="font-semibold text-neutral-600 uppercase text-sm">Why Choose CSIT?</div>
                {heroFeats.map(({ image, title, description }) => (
                    <div className="grid grid-cols-12 shadow-inner items-center px-6 py-2 bg-white rounded-lg mt-4 mb-10">
                        <div className="col-span-3 mx-auto">
                            <Image src={image} alt='feats' width={50} height={50} />
                        </div>
                        <div className="col-span-8">
                            <div className="font-bold text-2xl">{title}</div>
                            <div className="line-clamp-2">{description}</div>
                        </div>
                        <FaArrowRight />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero