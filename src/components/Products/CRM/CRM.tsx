import Image from 'next/image'
import React from 'react'
import { Carousel } from '@/utils/MaterialUi'
interface Logo {
    image: string
}
const customerLogo: Logo[] = [
    { image: '/customer/cust1.png' },
    { image: '/customer/cust2.png' },
    { image: '/customer/cust3.png' },
    { image: '/customer/cust4.png' },
    { image: '/customer/cust5.png' },
]

const carouselSec = [
    {
        title: 'Stay informed',
        description: 'Nuanced forecasting, performance management, and deep BI capabilities for the right insight at all times.',
        video: '/video/video4.webm'
    },
    {
        title: 'Engage with customers',
        description: 'Contextual customer engagement in real-time, across every channel, to ensure rich experiences.',
        video: '/video/video5.webm'
    },
    {
        title: 'Stay informed',
        description: 'Nuanced forecasting, performance management, and deep BI capabilities for the right insight at all times.',
        video: '/video/video4.webm'
    },
    {
        title: 'Engage with customers',
        description: 'Contextual customer engagement in real-time, across every channel, to ensure rich experiences.',
        video: '/video/video5.webm'
    },
]
const CRM = () => {
    return (
        <div>
            {/* hero section */}

            <section className='p-20 text-center bg-gradient-to-r from-purple-500 to-pink-200 h-screen flex flex-col justify-center items-center gap-8'>
                <div data-aos="fade-right" data-aos-duration="1000" className="text-[30px] md:text-[45px] lg:text-[50px] mb-[1rem] font-bold text-zinc-800 leading-10 md:leading-[4rem]'">IT’S EASY TO GROW</div>
                <div data-aos="fade-left" data-aos-duration="1000" className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-medium text-zinc-800 leading-10 md:leading-10'">Convert more, build lasting relationships, and grow your business resiliently, with the magic of contextual AI and thoughtful UI.</div>
            </section>
            {/* customer section */}
            <section className='bg-slate-50 h-[80vh] p-20 text-center flex flex-col justify-center items-center gap-16'>
                <div data-aos="flip-up" data-aos-duration="1000" className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-medium text-zinc-800 leading-10 md:leading-10'">Over 100 Million superheroes grow with us</div>
                <div className="flex flex-wrap gap-8">
                    {
                        customerLogo.map(({ image }, index) => (
                            <div data-aos="flip-down" className="bg-pink-50 shadow-md rounded-3xl flex items-center justify-center px-6 py-2" key={index}>
                                <Image src={image} alt='customer-logo' width={100} height={100} />
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10 bg-gradient-to-r from-blue-200 to-cyan-200'>
                <div className=""><iframe src="https://lottie.host/embed/493d9b44-dce6-42ce-be88-9ef14ead92ed/mmjgSHLols.json" width={500} height={500}></iframe></div>
                <div className="">
                    <div className='text-[20px] md:text-[25px] lg:text-[30px] mb-[1rem] font-medium text-zinc-600 leading-10 md:leading-10'>
                        CSIT CRM has helped us achieve 4x ROI in just two years, allowing us to excel as one of the largest full-service stores for interiors in the real estate industry. CSIT's 360-degree view has enabled us to offer great value and experiences to our customers.
                    </div>
                </div>
            </section >
            {/* slider */}
            <section className='bg-gray-200  md:h-[100vh] flex items-center justify-center '>
                <Carousel transition={{ duration: 1 }} autoplay={true} loop={true} className="w-11/12 md:h-[80vh] " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {carouselSec.map(({ title, description, video }, index) => (
                        <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 items-center mx-auto">
                            <div className="bg-gradient-to-l from-blue-200 to-cyan-200 h-[26rem] flex flex-col items-start justify-center px-8 py-10 rounded-l-[2rem]  gap-10 ">
                                <div className="mt-[0.5rem] font-bold text-[35px] md:text-[40px] text-indigo-500 ">{title}</div>
                                <div className="md:text-[18px] text-[16px] text-indigo-900">{description}</div>
                            </div>
                            <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-[26rem] flex flex-col items-start justify-center p-10  rounded-r-[2rem] ">
                                <video src={video} autoPlay loop muted width={300} height={300} />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </section>
        </div>
    )
}

export default CRM 