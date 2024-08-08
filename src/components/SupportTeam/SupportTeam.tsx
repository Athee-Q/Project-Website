import Image from 'next/image'
import React from 'react'

const SupportTeam = () => {
    return (
        <div className='pt-28 pb-12'>
            <div className="w-4/5 mx-auto items-center grid grid-cols-1  lg:grid-cols-2 gap-8">
                <div >
                    <div className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-zinc-800 leading-10 md:leading-[4rem]' >Need Help? CSIT (Cyber Storm Infotech) Support Team is Ready to Assist You!</div >
                    <div className="mt-4 md:text-[17px] text-[15px] text-black opacity-90 font-[400]">At CSIT (Cyber Storm Infotech), a leading software development company, we are dedicated to your satisfaction and ready to provide expert assistance. Whether you have questions, need technical support, or require guidance on our software solutions, our knowledgeable team is here to help you every step of the way.</div>
                    <div
                        className="flex items-center space-x-6 mt-8">
                        <Image src={'/support/clientsupport.png'} alt='icon' width={60} height={60} />
                        <div>
                            <div className="text-[18px] text-gray-900 font-medium mb-2">
                                Email client support
                            </div>
                            <div className="md:w-3/4 w-11/12 text-[15px] text-black opacity-85">Efficient support for email setup, troubleshooting, and optimization. Tailored solutions for reliability and security.</div>
                        </div>
                    </div>
                    <div
                        className="flex items-center space-x-6 mt-8">
                        <Image src={'/support/livesupport.png'} alt='icon' width={60} height={60} />
                        <div>
                            <div className="text-[18px] text-gray-900 font-medium mb-2">
                                Live ticket support
                            </div>
                            <div className="md:w-3/4 w-11/12 text-[15px] text-black opacity-85">Swift issue resolution with minimal downtime. Proactive support for maximum productivity.</div>
                        </div>
                    </div>
                </div>
                <div
                    className='col-span-1'>
                    <Image src={'/images/supportteam.jpg'} alt='support' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default SupportTeam