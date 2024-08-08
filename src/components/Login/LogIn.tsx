"use client"
// import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
// import { baseUrl } from '../utils/baseUrl';
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// import { toast } from 'react-toastify';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // axios.post(`${baseUrl}/login`, { formData })
    //   .then((res) => {
    //     toast.success(
    //       "Login Successful"
    //     )
    //     router.push("/")
    //   }).catch((err) => toast.error(err?.response?.data?.message))
  };
  return (
    <div className='grid grid-cols-2 fixed right-0 left-0 top-0 bottom-0 z-[100]'>
      <div className="bg-gray-100  h-screen flex items-center justify-end  pr-0 text-center">
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-tl-xl rounded-bl-xl h-[80vh] w-9/12 shadow-2xl gap-y-10 p-10 flex flex-col items-center justify-center">
          <Logo />
          <div className="text-gray-100 mx-auto">
            <p>To keep connected with us</p>
            <p>please login with your personal info</p>
          </div>
          <Button href={"/signup"} variant='solid' className='w-full '>Sign Up</Button>
        </div>
      </div>
      <div className="h-screen bg-indigo-50 flex  justify-start items-center gap-y-10 p-10 pl-0 text-center">
        <div className="bg-gray-50 rounded-tr-xl rounded-br-xl h-[80vh] w-9/12 shadow-2xl gap-y-10 p-10 flex flex-col items-center justify-center ">
          <div className="text-center">
            <h1 className="text-indigo-bg-indigo-500 font-bold txt-4xl">Login to your Account</h1>
            <div className="flex items-center gap-4 pt-8 w-fit mx-auto">
              <div className="icon_wrapper">
                <FaFacebook />
              </div>
              <div className="icon_wrapper">
                <FaGoogle />
              </div>
              <div className="icon_wrapper">
                <FaInstagram />
              </div>
            </div>
            <p className="t-8 text-[13px] text-gray-500">Or use your account for Login.</p>
            <form onSubmit={handleSubmit} className="flex w-80 mx-auto flex-col pt-2 gap-2">
              <input type="email" name="email" id="email" placeholder='Email' className="input_style" value={formData.email} onChange={handleInput} required />
              <input type="password" name="password" id="password" placeholder='Password' className='input_style' value={formData.password} onChange={handleInput} required />
              <Button variant='outline' type="submit" >Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn