import Image from 'next/image'
import React from 'react'

const ERP = () => {
    return (
        <div className='p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center bg-gradient-to-r from-amber-400 to-yellow-500'>
            <div className="order-1">
                <div className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-indigo-900">Unlock the Full Potential of Your Business with Our ERP Solutions</div>
                <div className="mt-[0.5rem] font-semibold text-[18px] md:text-[25px] text-gray-900">Why Choose Our ERP Software?</div>
                <div className="">In today’s competitive market, having an ERP (Enterprise Resource Planning) system that is tailored to your specific business needs is crucial. Our ERP software stands out as the most customizable solution, designed to streamline your operations and drive growth. Here’s why our ERP software is the best choice for your business:</div>
                <div className="indent-4 pl-10 ">
                    <div className='text-[16px]  list-item'><span className='font-semibold '>Fully Customizable:&nbsp;</span> Adapt the ERP to match your unique workflows and processes. Our software is designed to be flexible, ensuring it fits seamlessly into your business operations.</div>
                    <div className='text-[16px]  list-item'><span className='font-semibold '>User-Friendly Interface:&nbsp;</span> Our intuitive interface ensures that your team can start using the software with minimal training, boosting productivity from day one.</div>
                    <div className='text-[16px]  list-item'><span className='font-semibold '>Scalable Solutions:&nbsp;</span> Whether you are a small startup or a large enterprise, our ERP grows with your business, providing robust support at every stage.</div>
                    <div className='text-[16px]  list-item'><span className='font-semibold '>Real-Time Data and Insights:&nbsp;</span> Make informed decisions with real-time data analytics and reporting tools. Our ERP software provides comprehensive insights into all aspects of your business</div>
                    <div className='text-[16px]  list-item'><span className='font-semibold '>Integrated Modules:&nbsp;</span> From finance and accounting to human resources and inventory management, our ERP integrates all your essential business functions into a single platform.</div>
                </div>
            </div>
            <div className="order-2 relative w-72 h-72 sm:w-[500px] sm:h-[500px] mx-auto">
                <Image src={'/images/erp.png'} alt='ERP-solution' fill={true}  className='drop-shadow-2xl' />
            </div>
        </div>
    )
}

export default ERP