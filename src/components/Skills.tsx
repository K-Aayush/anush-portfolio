import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full md:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest text-[#0ef]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/html.png'}
                                alt='HTML'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/css.png'}
                                alt='CSS'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/js.png'}
                                alt='JS'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/C.png'}
                                alt='C'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>C</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/C++.png'}
                                alt='C++'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>C++</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/dart.png'}
                                alt='Dart'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Dart</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/flutter.png'}
                                alt='flutter'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Flutter</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl hover:shadow-md hover:shadow-[#0ef] border-[2px] border-[#0ef] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 items-center justify-center gap-4'>
                        <div className='m-auto'>
                            <Image 
                                src={'/Skills/github.png'}
                                alt='Github'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills
