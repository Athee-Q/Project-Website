import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    image: string;
    title: string;
    description: string;
    link: string;
}
const FeatureCard = ({ image, title, description, link }: Props) => {
    return (
        <div className='text-center bg-gry-100 p-4 rounded-lg hover:shadow-lg transition-all duration-100 cursor-pointer hover:scale-105'>
            <Image src={image} alt='icon' width={70} height={70} className='mx-auto' />
            <div className="text-[20px] mt-[1.4rem] font-[500] text-indigo-900">{title}</div>
            <div className="mt-[1rem] text-black\90 text-[15px]">{description}</div>
            <Link href={link || ''} className='mt-[1.4rem] text-red-600 font-medium cursor-pointer hover:text-red-800'>Learn More</Link>
        </div>
    )
}

export default FeatureCard