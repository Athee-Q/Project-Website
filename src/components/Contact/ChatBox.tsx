'use client'
import React, { useState } from 'react'
import { BsFillChatHeartFill } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import Chat from '../Chat/Chat';

const ChatBox = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className="fixed  z-40 bottom-10 right-16   grid place-items-end gap-2 ">
            {isOpen && <Chat/>}
            <div onClick={handleOpen} className="  bg-gradient-to-r from-amber-400 to-yellow-400 h-[60px] w-[60px] rounded-full flex items-center justify-center shadow-2xl border-[4px] hover:scale-90">
                {isOpen ? <IoCloseCircle className='text-gray-50 text-3xl ' /> : <BsFillChatHeartFill className='text-gray-50 text-3xl ' />}
            </div>
        </div>
    )
}

export default ChatBox;