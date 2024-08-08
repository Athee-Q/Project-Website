'use client'
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

interface FAQ {
    question: string
    answer: string
}

const FAQ = () => {
    const [faq, setFaq] = useState<FAQ[]>([]);
    const [isOpen, setIsOpen] = useState<boolean[]>(Array(faq.length).fill(false));

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/faq');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);

            setFaq(data);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }

    const handleToggleAll = () => {
        setIsOpen(prevState => prevState.map(() => !prevState[0]));
    };

    const handleToggle = (index: number) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className=' my-16 '>
            <div className='p-10 mb-10 grid gap-12 grid-cols-1 bg-indigo-50 md:grid-cols-2 mx-auto items-center justify-center'>
                <Image src={'/FAQ/faq.png'} alt='About us' width={400} height={400} className='drop-shadow-2xl' />
                <div className="grid">
                    <div className=" text-[20px] md:text-[25px] lg:text-[30px]  mt-[1.4rem] font-bold text-indigo-900">Frequently Asked Questions</div>
                    <div className="mt-2 text-indigo-600 text-[15px]">Welcome to the FAQ page of CSIT (Cyber Storm Info Tech). Below are answers to commonly asked questions about our company, services, and how we can assist your business. If you have additional questions or need further clarification, please don't hesitate to<Link href={'/contact-us'} className='text-indigo-500 font-semibold' > Contact Us</Link> directly.</div>
                </div>
            </div>
            <div className=" w-4/5 mx-auto flex justify-between items-center">
                <span className="text-3xl uppercase font-bold">FAQ's</span>
                <Button
                    variant='outline'
                    className='outline-indigo-500 text-indigo-500 flex items-center justify-center gap-4 text-sm'
                    onClick={handleToggleAll}
                >
                    {isOpen.every(item => item) ? (
                        <>
                            <span>Collapse All</span>
                            <MinusIcon className='w-5 h-5' />
                        </>
                    ) : (
                        <>
                            <span>Expand All</span>
                            <PlusIcon className='w-5 h-5' />
                        </>
                    )}
                </Button>
            </div>
            <div className="my-16 w-4/5 mx-auto flex flex-col gap-12">
                {faq.map(({ question, answer }, index) => (
                    <div key={index} className="">
                        <div onClick={() => handleToggle(index)} className="flex items-center justify-between cursor-pointer">
                            <div className='font-bold text-indigo-900    text-xl'>
                                <span className='text-2xl'>{index + 1}. &nbsp;</span>{question}
                            </div>
                            <div>
                                {isOpen[index] ? <MinusIcon className='w-5 h-5' /> : <PlusIcon className='w-5 h-5' />}
                            </div>
                        </div>
                        {isOpen[index] && (
                            <div className="my-8 font-semibold indent-24 tracking-widest">
                                {answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;

