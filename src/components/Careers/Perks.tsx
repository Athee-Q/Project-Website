'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface Perk {
    image: string
    title: string
}


const Perks = () => {
    const [perks, setPerks] = useState<Perk[]>([]);

    useEffect(() => {
      fetchData()
    }, [])
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/perks');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
  
        setPerks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
  
      }
    }
    return (
        <section className=' w-11/12 mx-auto '>
            <div className='text-[24px] md:text-[26px] lg:text-[30px] mb-[1rem] font-bold text-center text-zinc-800 leading-10 md:leading-[4rem]' >Benifits and Perks</div >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {perks.map(({ image, title }, index) => (
                    <div className="flex p-4 gap-4 justify-start items-center rounded-xl bg-slate-800/10 hover:scale-105" key={index}>
                        <Image src={image} alt='perks' width={40} height={40} />
                        <div className="  font-semibold text-indigo-800">{title}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Perks