'use client';
import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/16/solid';
import Button from '../Button/Button';
import Navlinks from './Navlinks';
import MobileNav from './MobileNav';

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

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [navData, setNavData] = useState<NavData[]>([]);

    useEffect(() => {
        fetchData()
        const scrollListener = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);




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

    const handleIsOpen = () => setIsOpen(!isOpen);


    return (
        <header className={`w-full sticky z-[99] top-0 ease-linear transition-all scrollbar-hide bg-gray-50  ${isScrolled && 'shadow-lg bg-white'}`}>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center h-[14vh]">
                <div className="lg:col-span-2 flex items-center justify-center px-8 py-2">
                    <div className="grow">
                        <Logo />
                    </div>
                    {!isOpen ? (
                        <Bars3BottomRightIcon onClick={handleIsOpen} className='w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer' />
                    ) : (
                        <XMarkIcon onClick={handleIsOpen} className='cursor-pointer w-[2rem] h-[2rem] text-gray-900 float-end' />
                    )}
                </div>

                <div className="hidden lg:col-span-7 lg:flex items-center space-x-10">
                    <Navlinks navData={navData} />
                </div>
                {isOpen && <MobileNav open={isOpen} close={handleIsOpen} navData={navData}  />}
                {/* Credentials */}
                <div className="lg:col-span-3 lg:flex items-center space-x-2 md:space-x-5">
                    <Button href='/login' className='hidden lg:flex' variant='outline'>Login</Button>
                    <Button href='/signup' className='hidden lg:flex' variant='solid'>Sign Up</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
