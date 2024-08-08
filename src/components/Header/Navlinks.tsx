'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'

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

const Navlinks = ( {navData}:{navData :NavData[]} ) => {
    const [activeDropdownIndex, setActiveDropdownIndex] = useState(-1);

    const handleDropDown = (index: number) => {
        setActiveDropdownIndex(activeDropdownIndex === index ? -1 : index);
    };

    return (
        <>
            {navData.map(({ title, dropDown }, index) => (
                <div key={index} className="group">
                    <div onClick={() => handleDropDown(index)} className='py-4 cursor-pointer flex items-center'>
                        <span className='text-neutral-600 group-hover:text-red-500 transition-all duration-200'>{title}</span>
                        <IoIosArrowDown className={`ml-1 transform ${activeDropdownIndex === index ? 'rotate-0' : 'rotate-270'} transition-all duration-200`} />
                    </div>
                    {activeDropdownIndex === index && (
                        <div /* ref={dropdownRef}  */ className='absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-[94vw] h-[80vh] bg-gray-100 rounded-lg shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto'>
                            {dropDown.map(({ link, title, image, description }, subIndex) => (
                                <Link key={subIndex} href={link} onClick={() => setActiveDropdownIndex(-1)} className='hover:bg-gray-50 p-8 rounded-xl flex flex-col gap-2'>
                                    <div className="relative w-full h-28">
                                        <Image src={image} alt='nav-icon' fill={true} className='rounded-lg' />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className='text-gray-600 hover:text-indigo-900 text-wrap transition-all duration-200 font-bold'>{title}</span>
                                        <span className='text-gray-400 hover:text-indigo-500 text-wrap transition-all duration-200 font-medium line-clamp-3'>{description}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

export default Navlinks;
