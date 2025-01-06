import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';

const Profile = () => {
  return (
    <div style={{}} className={`font-sans flex flex-col justify-center items-center lg:flex-row md:flex-row gap-10 pt-10`}>
        {/* left compartment */}
      <div className="flex text-white flex-col justify-center items-center gap-5">
        <div className='text-2xl lg:text-3xl md:3xl flex w-full justify-center lg:justify-start md:justify-start'>
          <h1>I am </h1>
        </div>
        <div className=' md:text-5xl lg:text-7xl text-4xl font-bold flex w-full justify-center lg:justify-start md:justify-start'>
            <h1>Dharineesh </h1><h2 className='text-sky-800'>&nbsp;G&nbsp;G</h2>
        </div>
        <div className='text-2xl font-medium flex justify-center lg:justify-start md:justify-start w-full'>
           <div className=''>a Frontend Developer</div>
        </div>
        <div className='flex gap-3 justify-center lg:justify-start md:justify-start w-full'>
            <FaLinkedin/>
            <FaGithub/>
            <SiGmail/>
        </div>
      </div>
      {/* right compartment */}
      <div className="flex text-white justify-center items-center flex-1 gap-3">
            <div className='rounded-full bg-sky-800 py-3 px-5'>Hire ME</div>
            <div className='border-solid rounded-full p-3 border-2 border-sky-800'>My Works</div>
        </div>
    </div>
  )
}

export default Profile
