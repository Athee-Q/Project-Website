'use client'
import React, { useEffect, useState } from 'react'
import Support from '../../../public/images/support.jpg'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/16/solid'

interface List {
    support: string
}

const CustomerSupport = () => {
    const [supportList, setSupportList] = useState<List[]>([]);

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/supportList');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            

            setSupportList(data);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <Image src={Support} alt='support' />
                </div>
                <div className="order-1 lg:order-2">
                    <div className="text-[20px] md:text-[25px] lg:text-[28px] text-indigo-900 font-bold leadig-[2rem] md:leading-[3rem]">Customer support is our main priority with their hundred percent satisfaction.</div>
                    {supportList.map(({ support }, index) => (
                        <div key={index} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            className="flex items-center space-x-3 mb-2">
                            <CheckIcon className='w-6 h-6 text-red-600' />
                            <div className='text-[17px] text-indigo-900 font-medium'>{support}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport