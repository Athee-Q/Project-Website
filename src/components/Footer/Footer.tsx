'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { policies } from '@/constants/policies';
import Logo from '../Logo/Logo';

interface NavDataItem {
  link: string
  title: string
  image: string
  description: string
}

interface NavData {
  title: string
  dropDown: NavDataItem[]
}

const Footer = () => {

  const [navData, setNavData] = useState<NavData[]>([]);

  useEffect(() => {
    fetchData()
}, [])


const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:4000/navData');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        
        setNavData(data); 
    } catch (error) {
        console.error('Error fetching data:', error);
       
    }
}
  return (
    <div className='px- pt-8 shadow-inner bg-purple-50'>
      <div className="w-11/12 pb-8 mx-auto grid grid-cols-1  md:grid-cols-3  gap-4  md:items-start">
        <div className='order-2 md:oder-1 md:col-span-2  grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
          {navData.map(({ title, dropDown }, index) => (
            <div key={index} className={`md:col-span-1 ${index === 0 ? 'md:row-span-2' : 'row-span-1'}`}>
              <div className="text-nowrap px-4  text-[17px] text-purple-900 font-bold mb-2 tracking-widest">{title}</div>
              {dropDown.map(({ link, title }, index) => (
                <div key={index} className="text-purple-500  font-semibold opacity-80 text-[15px] cursor-pointer w-full py-2 px-4 rounded-md hover:bg-gray-50 hover:text-purple-700  tracking-wider leading-[1]">
                  <Link href={link} >{title}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full md:col-span-1 order-1 md:order-2">
          <video src='/video/video3.mp4' autoPlay loop width={400} height={250} className='object-cover rounded-lg' />
          <div className="my-4"><Logo /></div>
          <div className="">
            CSIT (Cyber Storm Info Tech) specializes in web apps, mobile apps, Windows apps, and custom software development. We&apos;re dedicated to delivering innovative solutions that transform ideas into powerful digital experiences. Let&apos;s collaborate to elevate your business with our expertise in software development.
          </div>
        </div>
      </div>
      <div className="w-full py-10 mx-auto space-y-4 bg-[#001400] ">
        <div className="sm:flex justify-center items-center">
          {policies.map(({ link, title }, index) => (
            <div key={index} className={`px-4 py-2 text-[12px] text-gray-400 hover:scale-105 font-semibold ${index < policies.length - 1 && 'border-r-2 border-gray-600'} `}>
              <Link href={link} >{title}</Link>
            </div>
          ))}
        </div>
        <div className="text-[15px] text-center  font-medium text-blue-200">&copy; {new Date().getFullYear()}, CSIT SOFTWARE TECHNOLOGY PVT. LTD. All Rights Reserved.</div>
        <div className="flex justify-center items-center gap-4">
          <Link href={'/'} className='border-2 rounded-xl text-[18px] px-3 py-2 border-gray-400 text-blue-700 hover:scale-110 hover:text-blue-600 hover:border-blue-200 '>
            <FaFacebookF />
          </Link>
          <Link href={'/'} className='border-2 rounded-xl text-[18px] px-3 py-2 border-gray-400 text-purple-700 hover:scale-110 hover:text-purple-600 hover:border-purple-200 '>
            <FaInstagram />
          </Link>
          <Link href={'/'} className='border-2 rounded-xl text-[18px] px-3 py-2 border-gray-400 text-gray-600 hover:scale-110 hover:text-gray-700 hover:border-gray-400 '>
            <FaXTwitter />
          </Link>
          <Link href={'/'} className='border-2 rounded-xl text-[18px] px-3 py-2 border-gray-400 text-red-600 hover:scale-110 hover:text-red-700 hover:border-red-200 '>
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer