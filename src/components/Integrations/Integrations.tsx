import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Integrations = () => {
    return (
        <div className=' w-4/5 mx-auto pt-24 pb-16 text-center space-y-8'>
            <div className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-indigo-900">Automate your workflow with our integrations</div>
            <div className="text-gray-600 md:text-[16px] text-[5px]">Streamline your business operations with CSIT (Cyber Storm Infotech) ERP solutions. Our advanced platform is designed to enhance efficiency and productivity across your organization. With a comprehensive suite of built-in integrations, including seamless connections to finance, CRM, logistics, and more, CSIT ERP empowers your business to soar to new heights.Discover how CSIT ERP can optimize your workflow and accelerate growth. Contact us today to learn more about our customizable solutions tailored to meet your specific business needs.</div>
            <div className='mt-7 font-medium cursor-pointer text-blue-600'>
                <Link href={'/'} >Explore Details</Link>
            </div>
            <div className="mt-8 text-center w-4/5 mx-auto ">
                <Image src={'/images/integrations.png'} alt='integration' width={1000} height={1000} />
            </div>
        </div>
    )
}

export default Integrations