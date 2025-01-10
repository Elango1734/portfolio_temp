import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';

const Profile = () => {
  return (
    <div
      className='bg-cover bg-center w-full flex justify-center h-lvh'
    >
      <div className='flex flex-col w-full text-neutral-300 justify-center items-center gap-5'>
        <div className='text-primary font-extrabold text-3xl rounded-full px-3 py-2'>HELLO, WORLD!</div>
        <div className=''>
          <div className='flex gap-2 text-3xl md:text-8xl font-bold text'>
            <h1>{`I'm`}</h1>&nbsp;
            <h1 className='flex '>
              <p>Dharineesh</p>
              &nbsp;
              <p className='text-primary'>G</p>
              &nbsp;
              <p className='text-primary'>G</p>
            </h1>
          </div>
        </div>
        <div className='flex justify-center gap-3 md:p-5 p-2 text-sm text-bodytext'>
          <p>FULL STACK DEVELOPER</p>
          <p>|</p>
          <p> TECH ENTHUSIAST</p>
          </div>
{/* buttons */}
        <div className="flex justify-center items-center gap-5">
          <div className='rounded-full bg-primary_transparent py-3 px-10'>Hire ME</div>
          <div className='border-solid rounded-full p-3 px-10 border-2 border-solid'>My Works</div>
        </div>
        <div className='flex gap-5'>
          <FaLinkedin/>
          <FaGithub/>
          <SiGmail/>
        </div>
      </div>

    </div>

  )
}

export default Profile
