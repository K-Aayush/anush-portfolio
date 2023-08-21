/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest'>
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4'>
                        Hi, I'm <span className='text-[#0ef]'>Anush Karki</span>
                    </h1>
                    <h1 className='py-2'>
                        A Mobile APP DEVELOPER
                    </h1>
                    <p className='py-4 max-w-[70%] m-auto'>
                        I excel in crafting exceptional mobile apps both on Android and Ios using the Flutter framework and Dart programming language.
                    </p>
                    <div className='flex items-center justify-between max-w-[280px] md:max-w-[330px] m-auto py-4'>
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
    )
}

export default Main