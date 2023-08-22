/* eslint-disable react/no-unescaped-entities */
'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed bg-[#1f242d] w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 md:px-4 2xl:px-16'>
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width="60"
          height="50"
        />

        <div className='py-4 flex flex-col'>
          <ul className='hidden md:flex'>
            <Link href={'/'}>
              <li className='ml-10 text-sm font-semibold uppercase hover:border-b hover:border-[#0ef] hover:text-[#0ef]'>
                Home
              </li>
            </Link>
            <Link href={'/'}>
              <li className='ml-10 text-sm font-semibold uppercase hover:border-b hover:border-[#0ef] hover:text-[#0ef]'>
                About
              </li>
            </Link>
            <Link href={'/'}>
              <li className='ml-10 text-sm font-semibold uppercase hover:border-b hover:border-[#0ef] hover:text-[#0ef]'>
                Skills
              </li>
            </Link>
            <Link href={'/'}>
              <li className='ml-10 text-sm font-semibold uppercase hover:border-b hover:border-[#0ef] hover:text-[#0ef]'>
                Projects
              </li>
            </Link>
            <Link href={'/'}>
              <li className='ml-10 text-sm font-semibold uppercase hover:border-b hover:border-[#0ef] hover:text-[#0ef]'>
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} />
          </div>

        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white/50' : ''}>
        <div className={nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f242d] p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src="/assets/logo.png"
                alt=''
                width={60}
                height={35}
              />
              <div onClick={handleNav} className='border-[2px] border-[#0ef] rounded-full shadow-md shadow-[#0ef] p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-slate-700 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>LET'S BUILD SOMETHING TOGETHER</p>
            </div>
          </div>

          <div>
            <ul className='uppercase'>
              <Link href={"/"}>
                <li className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href={"/"}>
                <li className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href={"/"}>
                <li className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href={"/"}>
                <li className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href={"/"}>
                <li className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>

            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#0ef]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full'>
                <div className='border-[2px] border-solid cursor-pointer rounded-full border-[#0ef] p-3 text-[#0ef] hover:scale-105 hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-2xl hover:shadow-[#0ef] ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='border-[2px] border-solid cursor-pointer rounded-full border-[#0ef] p-3 text-[#0ef] hover:scale-105 hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-2xl hover:shadow-[#0ef] ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='border-[2px] border-solid cursor-pointer rounded-full border-[#0ef] p-3 text-[#0ef] hover:scale-105 hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-2xl hover:shadow-[#0ef] ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='border-[2px] border-solid cursor-pointer rounded-full border-[#0ef] p-3 text-[#0ef] hover:scale-105 hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-2xl hover:shadow-[#0ef] ease-in duration-300'>
                  <FiFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
