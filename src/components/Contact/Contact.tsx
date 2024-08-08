'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import ChatBox from './ChatBox';
import CallPng from '../../../public/images/telephone-call.png'
import ChatPng from '../../../public/images/live-chat.png'
import Chat from '../Chat/Chat';
import Map from './Map';

interface Address {
    HeadQuarters: {
        street: string;
        city: string;
        State: string;
        country: string;
    };
    Phone: string;
    Email: string;
}

const Contact = () => {
    const [address, setAddress] = useState<Address[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/companyAddress');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            
            setAddress(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <section className='h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[50vh] flex flex-col justify-center items-center bg-amber-900'>
                <div className='w-11/12 mx-auto text-center text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-amber-50 leading-10 md:leading-[4rem]'>Contact Us</div>
                <div className="w-11/12 mx-auto text-center mt-4 md:text-[22px] text-[20px] text-amber-50 opacity-90 font-medium">Thank you for your interest in CSIT (Cyber Storm Info Tech). We look forward to connecting with you. Here are the ways you can reach out to us:</div>
            </section>
            <section className='flex flex-col justify-center items-center'>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] gap-4 relative -top-10">
                    <div className='text-center bg-gray-100 p-4 border-[1px]  rounded-lg hover:shadow-lg transition-all duration-100 cursor-pointer'>
                        <Image src={CallPng} alt='icon' width={70} height={70} className='mx-auto' />
                        <div className="text-[27px] mt-[1.4rem] font-bold text-indigo-900">Talk to Sales</div>
                        <div className="mt-[1rem] text-black/90 text-[15px]">Interested in CSIT&apos;s software solutions? Feel free to call us to discuss your business needs.</div>
                        <div className="my-10">
                            <a href="tel:9876543210" className='my-10 text-indigo-600 font-medium cursor-pointer hover:text-red-500'>9876543210</a>
                        </div>
                    </div>
                    <div className='text-center bg-gray-100 p-4 border-[1px]  rounded-lg hover:shadow-lg transition-all duration-100 cursor-pointer'>
                        <Image src={ChatPng} alt='icon' width={70} height={70} className='mx-auto' />
                        <div className="text-[27px] mt-[1.4rem] font-bold text-indigo-900">Talk to Sales</div>
                        <div className="mt-[1rem] text-black/90 text-[15px]">Prefer to chat online? Our sales team is available to assist you through our live chat support.</div>
                        <div className="my-10"><Button variant='outline'>Contact Support</Button></div>
                    </div>
                </div>
            </section>
            <section className='mb-16 flex flex-col justify-center items-center gap-10'>
                <div className="text-center text-[27px] md:text-[35px] lg:text-[40px]  mt-[1.4rem] font-bold text-indigo-900">Connect with one of our global offices</div>
                <div className=" grid grid-cols-1 md:grid-cols-7 md:pr-10 items-center justify-start w-[80%]">
                    <div className="col-span-5 w-full h-[70vh]">
                        <Map />
                    </div>
                    {address.map((_, index) => (
                        <div key={index} className="mx-8 col-span-2 flex flex-col gap-5">
                            <div>
                                <div className="text-nowrap text-[18px] md:text-[22px] lg:text-[25px] font-semibold text-green-900">Headquarters:</div>
                                <div className="text-black/90 text-[15px]">
                                    <div>{address[index].HeadQuarters.street}</div>
                                    <div>{address[index].HeadQuarters.city}</div>
                                    <div>{address[index].HeadQuarters.country}</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-nowrap text-[18px] md:text-[22px] lg:text-[25px] font-semibold text-green-900">Phone:</div>
                                <div className="text-black/90 text-[15px]">
                                    <div>{address[index].Phone}</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-nowrap text-[18px] md:text-[22px] lg:text-[25px] font-semibold text-green-900">Email:</div>
                                <div className="text-black/90 text-[15px]">
                                    <div>{address[index].Email}</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-nowrap text-[18px] md:text-[22px] lg:text-[25px] font-semibold text-green-900">Business Hours:</div>
                                <div className="text-black/90 text-[15px]">
                                    <div>Monday - Friday: 9:00 AM to 6:00 PM (Your Timezone)</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 bg-amber-50 p-10'>
                <div className="flex- flex-col justify-center items-center">
                    <div className="text-amber-700 w-11/12 mx-auto text-center text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold leading-10 md:leading-[4rem]">Get in Touch</div>
                    <div className="w-11/12 mx-auto mt-4 md:text-[22px] text-[20px] text-amber-900 opacity-90 font-medium">For inquiries about our services, partnerships, or general questions, please fill out the form below. A member of our team will respond to your message promptly.</div>
                </div>
                <div className="">
                    <Chat />
                </div>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto p-10 gap-8">
                <div className="border-2 px-4 pt-4 pb-2 flex gap-2 justify-start items-center flex-col space-y-4 rounded-lg">
                    <div className="text-nowrap badge bg-indigo-100 text-indigo-800 text-xs font-medium px-4 py-2 rounded dark:bg-indigo-900 dark:text-indigo-300 text-[18px] md:text-[22px] lg:text-[25px]">Connect with Us</div>
                    <div className="text-gray-600 md:text-[16px] text-[15px]">Stay updated with the latest news, announcements, and insights from CSIT by following us on our social media channels:</div>
                </div>
                <div className="border-2 px-4 pt-4 pb-2 flex gap-2 justify-start items-center flex-col space-y-4 rounded-lg">
                    <div className="text-nowrap badge bg-gray-100 text-gray-800 text-xs font-medium px-4 py-2 rounded dark:bg-gray-900 dark:text-gray-300 text-[18px] md:text-[22px] lg:text-[25px]">Visit Us</div>
                    <div className="text-gray-600 md:text-[16px] text-[15px]">If you prefer a face-to-face meeting or would like to visit our office, please schedule an appointment in advance. We would love to welcome you to our workspace and discuss how CSIT can support your business needs.</div>
                </div>
                <div className="border-2 px-4 pt-4 pb-2 flex gap-2 justify-start items-center flex-col space-y-4 rounded-lg">
                    <div className="text-nowrap badge bg-amber-100 text-amber-800 text-xs font-medium px-4 py-2 rounded dark:bg-amber-900 dark:text-amber-300 text-[18px] md:text-[22px] lg:text-[25px]">Join Our Team</div>
                    <div className="text-gray-600 md:text-[16px] text-[15px]">Interested in joining our dynamic team at CSIT? Visit our Careers page to explore current job openings and opportunities.</div>
                </div>
                <div className="border-2 px-4 pt-4 pb-2 flex gap-2 justify-start items-center flex-col space-y-4 rounded-lg">
                    <div className="text-nowrap badge bg-green-100 text-green-800 text-xs font-medium px-4 py-2 rounded dark:bg-green-900 dark:text-green-300 text-[18px] md:text-[22px] lg:text-[25px]">Customer Support</div>
                    <div className="text-gray-600 md:text-[16px] text-[15px]">For existing clients requiring technical assistance or support, please visit our Support page or contact our dedicated support team at support@csit.com.</div>
                </div>
            </section>
            <ChatBox />
        </div>
    );
};

export default Contact;
