/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#0ef]'>About</p>
                    <h2 className='py-4'>Who Am I?</h2>
                    <p className='py-2'>I am a seasoned Flutter developer with over a year of experience, well-versed in crafting dynamic and engaging mobile applications using the Dart programming language. </p>
                    <p className='py-2'>Having successfully contributed to various projects, I am adept at collaborating within teams, understanding project requirements, and consistently delivering high-quality code on schedule. My ongoing exploration of the latest Flutter advancements and my ability to adapt to dynamic development landscapes ensure that I continue to create cutting-edge applications that cater to the evolving demands of today's mobile users.</p>
                </div>
                <div className='w-full h-auto m-auto rounded-xl shadow-xl hover:shadow-[#0ef] flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img
                        className='rounded-xl'
                        src="/assets/anush.jpg"
                        alt="Anush"
                    />
                </div>
            </div>
        </div>
    )
}

export default About