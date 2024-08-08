'use client'
import React, { useEffect, useState } from 'react'
import About2 from '../../../public/images/about-2.png'
import Image from 'next/image'
import Link from 'next/link'

interface Team {
  image: string
  name: string
  role: string
}
const About = () => {

  const [team, setTeam] = useState<Team[]>([]);

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/team');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);

      setTeam(data);
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  }
  return (
    <div>
      <section className="h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex flex-col justify-center  items-center " style={{
        backgroundImage: `url(/images/about.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="w-full h-full bg-black/70">
          <div className="w-[80%] mx-auto text-center py-28 ">
            <div className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-white leading-10 md:leading-[4rem]' >Welcome to CSIT - Empowering Innovation, Transforming Businesses</div >
            <div className="mt-4 md:text-[17px] text-[15px] text-white opacity-90 font-[400]">From its inception under the leadership of founder Syed Nizamudeen, CSIT (Cyber Storm Info Tech) has grown from a humble beginning into a globally recognized brand in software development solutions. With a steadfast commitment to customer-centric innovation, CSIT continues to redefine the landscape of technology solutions for businesses of all sizes.</div>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 gap-4 lg:grid-cols-3 w-4/5 mx-auto py-12 text-center'>
        <div className="bg-gray-50 rounded-lg px-8 py-4 space-y-4">
          <div className="text-5xl text-orange-500 font-semibold">10+</div>
          <div className="text-xl uppercase text-indigo-800 font-medium">Years on the Market</div>
        </div>
        <div className="bg-gray-50 rounded-lg px-8 py-4 space-y-4">
          <div className="text-5xl text-orange-500 font-semibold">40+</div>
          <div className="text-xl uppercase text-indigo-800 font-medium">Amaizing #CSIT Mebers</div>
        </div>
        <div className="bg-gray-50 rounded-lg px-8 py-4 space-y-4">
          <div className="text-5xl text-orange-500 font-semibold">80+</div>
          <div className="text-xl uppercase text-indigo-800 font-medium">Customer Countries</div>
        </div>
      </section>
      <section>

        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 w-11/12 mx-auto items-center justify-center'>
          <div className=''><Image src={About2} alt='About us' width={600} height={600} /> </div>
          <div className=''>
            <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">
              Our Mission
            </div>
            <div className="mt-2 text-black\90 text-[15px]">At CSIT, our mission is rooted in empowering businesses to excel through innovative and accessible software solutions. For over [number of years] years, we have dedicated ourselves to crafting easy-to-use yet powerful tools that meet the diverse and evolving needs of our clients. Whether you are a startup or a multinational corporation, CSIT is here to support your journey towards growth and success.</div>
          </div>
          <div className=''>
            <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">
              Our Approach
            </div>
            <div className="mt-2 text-black\90 text-[15px]">We believe in a flexible and inclusive approach to work, fostering an environment where creativity thrives and each team member can flourish both personally and professionally. This approach not only enhances our ability to deliver cutting-edge solutions but also ensures that we maintain a deep understanding of our clients’ unique challenges and goals.</div>
          </div>
          <div className=''>
            <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">
              Global Presence, Local Expertise
            </div>
            <div className="mt-2 text-black\90 text-[15px]">Headquartered [if applicable, mention location], CSIT operates on a global scale, serving clients across [mention regions if applicable]. Our multicultural team brings together a wealth of experiences and insights, allowing us to understand and cater to the unique needs of businesses worldwide.</div>
          </div>
          <div className=''>
            <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">
              Commitment to Innovation
            </div>
            <div className="mt-2 text-black\90 text-[15px]">From our inception, innovation has been at the heart of everything we do. We continuously strive to anticipate industry trends and technological advancements, ensuring that our products and solutions are always at the forefront of innovation. This dedication empowers our clients to stay ahead in their respective markets.</div>
          </div>
          <div className=''>
            <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">
              Customer-Centric Approach
            </div>
            <div className="mt-2 text-black\90 text-[15px]">At CSIT, customer satisfaction is paramount. We prioritize understanding our clients’ challenges and goals, enabling us to deliver tailored solutions that exceed expectations. Our commitment to exceptional customer support ensures that we build long-lasting partnerships based on trust and mutual success.</div>
          </div>
          <div className=''>
            <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">
              Our Culture
            </div>
            <div className="mt-2 text-black\90 text-[15px]">Our culture is built on collaboration, respect, and a shared passion for technology. We foster an environment where creativity flourishes and ideas are encouraged, allowing each team member to contribute meaningfully to our collective success. This inclusive culture not only drives our innovation but also strengthens our unity as a team.</div>
          </div>
        </div>
      </section >
      <section className='py-16 text-center w-4/5 mx-auto space-y-10'>
        <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">
          Who we are
        </div>
        <div className="mt-2 text-black\90 text-[16px] sm:text-[18px]">
          We’re a global, multicultural team united together to provide innovative products, solutions, and exceptional customer support. Our culture keeps us connected and inspired, which relies on the contributions and innovations of each person throughout the years.

        </div>
        <div className=" text-[16px] md:text-[18px] lg:text-[20px]  mt-[1.4rem] font-bold text-indigo-400">
          <Link href={''} >INTERESTED IN JOINING THE TEAM? &gt;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 py-10">
          {team.map(({ image, name, role }, index) => (
            <div className="mx-auto flex flex-col justify-center items-center gap-2" key={index}>
              <div className="rounded-full relative z-10 overflow-hidden">
                <Image src={image} alt={name} width={80} height={80} />
              </div>
              <div className=" text-[16px] md:text-[18px] lg:text-[20px] font-bold text-indigo-900">{name}</div>
              <div className=" text-black\90 text-[15px] font-medium tracking-widest">{role}</div>
            </div>
          ))}
        </div>
      </section>
    </div >
  )
}

export default About