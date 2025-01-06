import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';

const Profile = () => {
  return (
    <div
      style={{ backgroundImage: `url('images/bg-2.jpg')`, borderImage:'fill 0 linear-gradient(#0001, #000)'}}
      className='bg-cover bg-center w-full flex justify-center h-lvh'
    >
      {/* <div
        className={`font-sans flex flex-col justify-center items-center lg:flex-row md:flex-row gap-10 pt-10 lg:w-10/12`}>
        left compartment
        <div className="flex text-neutral-400 flex-col justify-center items-center gap-5">
          <div className='text-2xl lg:text-3xl md:3xl flex w-full justify-center md:justify-start'>
            <h1>{"I'm"} </h1>
          </div>
          <div className=' md:text-5xl lg:text-7xl text-4xl font-bold flex w-full justify-center md:justify-start'>
            <h1>Dharineesh </h1><h2 className='text-sky-800'>&nbsp;G&nbsp;G</h2>
          </div>
          <div className='text-2xl font-medium flex justify-center md:justify-start w-full'>
            <div className=''>a Frontend Developer</div>
          </div>
          <div className='hidden flex gap-3 justify-center md:justify-start w-full'>
            <FaLinkedin />
            <FaGithub />
            <SiGmail />
          </div>
        </div>
        right compartment
        <div className="flex text-white justify-center items-center flex-1 gap-3">
          <div className='rounded-full bg-sky-800 py-3 px-5'>Hire ME</div>
          <div className='border-solid rounded-full p-3 border-2 border-sky-800'>My Works</div>
        </div>
      </div> */}

      <div className='flex flex-col border border-solid w-full text-neutral-300 justify-center items-center gap-5'>
        <div className='border border-solid rounded-full px-3 py-2'>Hello</div>
        <div>
          <div className='flex gap-2 text-3xl md:text-8xl font-bold'>
            <h1>{`I'm`}</h1>&nbsp;
            <h1 className='flex '><p>Dharineesh</p>&nbsp;<p className='text-sky-800'>G</p>&nbsp;<p className='text-sky-800'>G</p></h1>
          </div>
        </div>
{/* buttons */}
        <div className="flex justify-center items-center gap-3">
          <div className='rounded-full bg-sky-800 py-3 px-5'>Hire ME</div>
          <div className='border-solid rounded-full p-3 border-2 border-solid'>My Works</div>
        </div>
        {/* <div></div> */}
      </div>

    </div>

  )
}

export default Profile
