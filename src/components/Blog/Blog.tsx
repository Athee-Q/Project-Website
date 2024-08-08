'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';



interface BlogData {
    id: number
    title: string
    image: string
    category: string
    author: string
    authorPic: string
    published_date: string
    reading_time: string
    content: string
    tags: string[]
}

const Blog = () => {
    const [blogData, setBlogData] = useState<BlogData[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const getRandomDateInLastTwoYears = () => {

        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

        const msPerDay = 24 * 60 * 60 * 1000;
        const msPerTwoYears = msPerDay * 365 * 2;

        const randomTimestamp = twoYearsAgo.getTime() + Math.random() * msPerTwoYears;

        const randomDate = new Date(randomTimestamp);

        return randomDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    useEffect(() => {
        fetchData()
    }, [])

  
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/blogData');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            
            setBlogData(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
           
        }
    }

    return (
        <div>
            <div className="bg-gradient-to-r  w-full h-[40vh] relative ">
                <video src='/video/video2.mp4' autoPlay={true} loop controls={false} muted className='w-full h-full absolute top-0 left-0 object-cover' />
                <div className="w-full h-full text-wrap px-10 tracking-widest absolute bg-black/30" ></div>
            </div>
            <div className="">
                <div className="sm:sticky top-[13vh] bg-white z-40  flex flex-col sm:flex-row overflow-y-auto sm:overflow-x-auto w-fuyll mx-auto p-10 gap-8 scrollbar-hide">
                    <div onClick={() => setSelectedCategory("All")} className="px-6 py-2 text-center text-nowrap bg-gray-50 hover:shadow-inner cursor-pointer">All</div>
                    {(() => {
                        const seenCategories = new Set(); // Initialize an empty Set to track seen categories
                        return blogData.map(({ category }, index) => (
                            !seenCategories.has(category) && // Check if the category has not been seen 
                            seenCategories.add(category) && // Add the category to the Set if it's new
                            <div key={index} onClick={() => setSelectedCategory(category)} className="px-6 py-2 text-center text-nowrap bg-gray-50 hover:shadow-inner cursor-pointer ">{category}</div> // Render the category
                        ));
                    })()}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10 pt-2">
                    {blogData.filter(({ category }) => selectedCategory === "All" || category === selectedCategory).map(({ image, title, author }, index) => (
                        <div key={index} className="flex flex-col max-w-sm rounded-xl hover:shadow-2xl cursor-pointer p-2">
                            <div className="w-full h-[30vh] relative ">
                                <Image src={image} alt='blog-image' fill={true} className='rounded-lg' />
                            </div>
                            <div className="font-bold text-2xl">{title}</div>
                            <div className="flex items-center justify-evenly">
                                <span className="text-gray-600 text-[16px] font-medium ">{getRandomDateInLastTwoYears()}</span>
                                <span className='h-[17px] w-[1px] bg-black '></span>
                                <span className="">{author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog