import React from 'react';
import { Inter } from 'next/font/google';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const Profile = () => {
  return (
    <div style={{}} className={`${inter.variable} font-sans lg:flex md:flex pt-20`}>
        {/* left compartment */}
      <div className="flex text-white flex-col justify-start items-center w-2/4 gap-3">
        <div className='self-start text-4xl flex w-full'>
          <h1>I'm </h1>
        </div>
        <div className='self-start text-7xl font-bold flex w-full border-2 border-solid border-sky-800'>
            <h1>Dharineesh </h1><h2 className='text-sky-800'>&nbsp;G&nbsp;G</h2>
        </div>
        <div className='self-start text-2xl font-medium flex '>
            <div>a</div> <div className=''>&nbsp;Frontend Developer</div>
        </div>
        <div className='self-start flex gap-3'>
            <FaLinkedin/>
            <FaGithub/>
            <SiGmail/>
        </div>
      </div>
      {/* right compartment */}
      <div className="flex text-white justify-center items-center w-1/2 gap-3">
            <div className='rounded-full bg-sky-800 py-3 px-5'>Hire ME</div>
            <div className='border-solid rounded-full p-3 border-2 border-sky-800'>My Works</div>
        </div>
    </div>
  )
}

export default Profile
