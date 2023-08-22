import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface project{
    title: string;
    backgroundImg: any;
    projecturl: string
}

const ProjectItem = ({ title, backgroundImg, projecturl }: project) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#0ef] rounded-xl p-4 group hover:bg-[#0ef]'>
            <Image
                className='rounded-xl group-hover:opacity-10'
                src={backgroundImg}
                alt='/'
            />
            <div className='hidden group-hover:block absolute items-center justify-center '>
                <h3 className='text-2xl text-[#1f242d] tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-[#1f242d] text-center'>Flutter Framework</p>
                <Link href={projecturl}>
                    <p className='text-center py-3 rounded-lg bg-[#1f242d] text-lg cursor-pointer hover:scale-105 ease-in duration-300'>More Info</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem