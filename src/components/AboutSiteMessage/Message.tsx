'use client'
import { useRouter } from 'next/navigation';
// components/Message.js
import React, { useState } from 'react';
import Button from '../Button/Button';

const Message = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      router.push('/products'); // Redirect after animation
    }, 1000); // Adjust timing based on your animation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-300/30 to-yellow-500/30 ">
      <div className=" p-6 rounded-lg shadow-2xl bg-gradient-to-r from-yellow-400 to-orange-400 border-yellow-200 border-2 text-center max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Work in Progress</h2>
        <p className="text-gray-600 mb-4">
          This website is currently under construction. Please check back later!
        </p>
        <Button variant='outline'
          className="  text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-300 ease-in-out"
          onClick={handleClick}
        >
          Click to Proceed
        </Button>
        {clicked && (
          <p className="mt-4 bg-gradient-to-l from-red-500 to-orange-500 py-2 px-4 rounded-lg text-xl font-medium text-gray-200">Thank you for your interest!</p>
        )}
      </div>
    </div>
  );
};

export default Message;
