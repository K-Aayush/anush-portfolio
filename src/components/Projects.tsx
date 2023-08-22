/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import cinepebble from '../../public/Projects/cinepebble.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#0ef]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-3 gap-8'>

                <ProjectItem 
                    title="Entertaintment App"
                    backgroundImg={cinepebble}
                    projecturl="/"
                />
                <ProjectItem 
                    title="Entertaintment App"
                    backgroundImg={cinepebble}
                    projecturl="/"
                />
                <ProjectItem 
                    title="Entertaintment App"
                    backgroundImg={cinepebble}
                    projecturl="/"
                />
            </div>
        </div>
    </div>
  )
}

export default Projects