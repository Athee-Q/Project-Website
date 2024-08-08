import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={'/'} className=" shadow-black transform transition duration-200 ease-in-out ">
            <Image src={'/logo/logo1.png'} alt='logo' width={500} height={500} className='rounded-xl hover:shadow-inner  drop-shadow-lg shadow-black ' />
        </Link>
    )
}

export default Logo