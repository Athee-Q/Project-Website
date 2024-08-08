import React from 'react'
import Button from '../Button/Button';
import Image from 'next/image';

interface Props {
    bg: string;
    num: string;
    image: string;
    title: string;
    description: string;
}
const PrincipleCard = ({ bg, num, title, image, description }: Props) => {
    return (
        <div
            className={`relative ${num === '2' && 'lg:scale-110 scale-100 z-10'} bg-gray-100 shadow-md transform`}>
            <div className={`${bg} h-52  flex flex-col items-center justify-center rounded-t-md gap-4 px-4`}>
                <Image src={image} alt='icon' width={70} height={70} className='' />
                <div className='text-[30px] text-center text-gray-900 leading-tight font-bold '>
                    {title}
                </div>
            </div>
            <div className="px-8 py-4 mt-4 ">
                <div className="text-[16px] font-medium border-b-2 border-gray-300 pb-2 leading-8 text-black opacity-50 mb-4 "> {description}</div>
                <div className="my-6 text-center">
                    <Button variant='outline' >Read Our Story</Button>
                </div>
            </div>
        </div >
    )
}

export default PrincipleCard