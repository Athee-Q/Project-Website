'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

interface NavItem {
  title: string;
  image: string;
  description: string;
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

const Products: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | undefined>();
  const [navData, setNavData] = useState<NavData[]>([]);

  useEffect(() => {

    fetchData()
    const handleScroll = () => {
      const sections = document.querySelectorAll('.menu-section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });

      const foundItem = navData[0].dropDown.find(item => item.title.toLowerCase().replace(/\s+/g, '-') === current);
      if (foundItem) {
        setSelectedTitle(foundItem.title);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navData]);

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
    <div className='relative'>
      <div className='p-10 shadow-current grid gap-12 grid-cols-1 bg-green-50 md:grid-cols-2 mx-auto items-center justify-center'>
        <Image src={'/product/products.png'} alt='About us' width={400} height={400} className='drop-shadow-2xl' />
        <div className="grid">
          <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-green-900">Elevate Your Business with CSIT&apos;s Products</div>
          <div className="mt-2 text-green-600 text-[15px]">Discover how CSIT (Cyber Storm Info Tech) can propel your business forward with our innovative suite of software solutions. Whether you&apos;re aiming to optimize operations with customizable CRM and ERP systems, engage customers through intuitive mobile applications, or implement specialized software tailored to your industry, CSIT delivers comprehensive tools designed to enhance efficiency, productivity, and profitability. Backed by years of industry expertise and a commitment to excellence, our solutions empower businesses of all sizes to thrive in todays&apos; competitive landscape. Explore CSIT&apos;s products today and discover the difference in performance and growth they can make for your business</div>
        </div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-12 h-full w-full">
        {/* Side menu */}
        <div className="sticky z-50  flex-nowrap text-nowrap overflow-x-auto scrollbar-hide w-full lg:h-[100vh] top-[14vh] bg-gray-50 col-span-3 p-6 flex lg:flex-col gap-4">
          <div className={`font-semibold cursor-pointer text-blue-gray-500`}>Products</div>
          {navData[0].dropDown.map(({ title }, index) => (
            <div
              key={index}
              onClick={() => setSelectedTitle(title)}
              className={`font-medium cursor-pointer text-blue-gray-500 px-4  ${selectedTitle === title ? 'border-b-2 lg:border-b-0 lg:border-l-2 border-cyan-700 pl-4' : ''}`}
            >
              {title}
            </div>
          ))}
        </div>
        {/* Menu content */}
        <div className="col-span-9 bg-gray-50 h-hull w-full overflow-y-auto">
          {navData[0].dropDown.map(({ title, image, description }: NavItem, index: number) => (
            <div id={title.toLowerCase().replace(/\s+/g, '-')} key={index} className="relative mt-12 mb-56 w-full h-[90vh] menu-section">
              <div className=" p-3 w-11/12 mx-auto h-full bg-blue-gray-900 rounded-2xl shadow-2xl shadow-gray-50 border-4 border-blue-gray-700 hover:skew-x-1 hover:border-l-[10px] duration-200 ease-linear transition-all ">
                <div className=" relative w-full h-full shadow-inner">
                  <Image src={image} alt='image' layout="fill" className='rounded-lg ' />
                </div>
              </div>
              <div className="z-10 absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 w-[320px] mx-auto bg-blue-gray-900 rounded-2xl shadow-2xl shadow-gray-50 border-4 border-blue-gray-700 flex flex-col hover:skew-y-16 hover:-skew-x-6 hover:border-r-[12px] duration-200 ease-linear transition-all">
                <div className='w-10 h-2 border-2 rounded-xl mx-auto my-3'></div>
                <div className="relative h-48 w-full">
                  <Image src={image} alt={title} layout="fill" className="rounded-t-lg" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-lg text-indigo-400 font-bold">{title}</div>
                  <div className="mt-2 text-[16px] text-gray-500">{description}</div>
                </div>
                <Button href={`${title.toLowerCase()}`} variant='outline' className='bg-blue-gray-50 w-4/12 mx-auto my-4 text-nowrap text-cener rounded-full'>View Site</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto text-center h-[50vh] flex flex-col items-center justify-center gap-6">
        <div className="text-4xl font-semibold tracking-wider">Ready to do your best work?</div>
        <div className="text-xl font-medium tracking-wider">Let&apos;s get you started.</div>
        <Button variant='solid' className='uppercase max-w-sm' href='/signup'>Sign up Now</Button>
      </div>
    </div>
  );
}

export default Products;
