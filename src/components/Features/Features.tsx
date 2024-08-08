'use client'
import React, { useEffect, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'

interface Feature{
    image: string
    title: string
    description: string
    link: string
  }
const Features = () => {
    const [feature, setFeature] = useState<Feature[]>([]);

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/features');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);

            setFeature(data);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }
    return (
        <div className='pt-20 pb-12'>
            {/* Section Heading */}
            <SectionHeading headingMini='Ideal solutiobn for you' headingPrimary='Explore Ultimate Features' />
            {/* Card */}
            <div className="pt-5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 items-center gap-12">
                {feature.map(({ image, title, description, link }, index) => (
                    <FeatureCard key={index} image={image} title={title} description={description} link={link} />
                ))}
            </div>
        </div>
    )
}

export default Features