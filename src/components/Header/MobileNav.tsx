'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Button from '../Button/Button'

interface Props {
    open: boolean
    close(): void
    navData:NavData[]
}

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

const MobileNav = ({ open, close, navData }: Props) => {

    const [activeDropdownIndex, setActiveDropdownIndex] = useState(-1);

    const handleDropDown = (index: number) => {
        setActiveDropdownIndex(index === activeDropdownIndex ? -1 : index);
    };

    return (
        <>
            <div onClick={close} className={` top-[13vh] left-0 z-20 ${open ? 'fixed' : 'hidden'} h-full w-[100vw]  bg-black/50 `}></div>
            <div className={` z-50 left-0 top-[13vh] ${open ? 'fixed' : 'hidden'} h-full w-[85vw] sm:w-[60vw] bg-white py-16 px-8 overflow-y-auto scrollbar-hide space-y-4`}>
                {navData.map(({ title, dropDown }, index) => (
                    <div key={index} className=" group pb-4">
                        <div onClick={() => handleDropDown(index)} className='py-4 cursor-pointer flex items-center'>
                            <span className='text-gray-600 group-hover:text-red-500 transition-all duration-200'>{title}</span>
                            <IoIosArrowDown className={`ml-1 transform ${activeDropdownIndex === index ? 'rotate-0' : 'rotate-270'} transition-all duration-200`} />
                        </div>
                        {activeDropdownIndex === index && (
                            <div className=' shadow-inner p-2 '>
                                {dropDown.map(({ link, title, image, description }, subIndex) => (
                                    <Link key={subIndex} href={link} className=' hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center justify-start gap-6 ' >
                                        <div className=" relative w-10 h-10">
                                            <Image src={image} alt='nav-icon' fill={true} className='rounded-lg' />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className='text-gray-600 hover:text-indigo-900 text-wrap transition-all duration-200 font-bold line-clamp-1'>{title}</span>
                                            <span className='text-gray-400 hover:text-indigo-500 text-wrap transition-all duration-200 font-medium line-clamp-2'>{description}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))
                }
                <Button href='/login' className='w-full block' variant='outline'>Login</Button>
                <Button href='/signup' className='w-full block' variant='solid'>Sign Up</Button>
            </div>
        </>
    )
}

export default MobileNav