import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../Button/Button';
const Chat = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
    });


    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="h-[65vh] w-[30vw] mx-auto flex flex-col gap-4 bg-gradient-to-r from-amber-400 to-yellow-400 p-6 rounded-xl shadow-2xl">
                <input type="text" name="name" id="name" placeholder='Your Name' className="input_style" value={formData.name} onChange={handleInput} required />
                <input type="tel" name="mobile" id="mobile" placeholder='Your Number' className="input_style" value={formData.mobile} onChange={handleInput} required />
                <input type="email" name="email" id="email" placeholder='Your Email' className="input_style" value={formData.email} onChange={handleInput} required />
                <input type="text" name="subject" id="subject" placeholder='Your Subject' className="input_style " value={formData.subject} onChange={handleInput} required />
                <textarea name='message' id='message' placeholder='Tell me your message!' cols={30} rows={3} className="input_style" value={formData.message} onChange={handleInput}></textarea>
                <Button variant='outline'>Submit</Button>
            </div>
        </form>
    )
}

export default Chat