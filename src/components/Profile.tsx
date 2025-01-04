import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Profile = () => {
  return (
    <div style={{}} className='lg:flex md:flex pt-10'>
        {/* left compartment */}
      <div className="flex text-white flex-col justify-start items-center w-2/4 gap-3">
        <div className='self-start text-3xl font-bold flex'>
            <h1 className=''>DHARINEESH </h1><h2 className='text-sky-800'>&nbsp;G&nbsp;G</h2>
        </div>
        <div className='self-start text-2xl font-medium flex '>
            <div>I'm a</div> <div className='text-sky-800'>&nbsp;Frontend Developer</div>
        </div>
        <div className='self-start'>
            I'm professional web developer with strong skill in HTML, 
            CSS, JavaScript, Tailwind, JQuery etc. I have working in this 
            field almost 3 years and all projects are complited successfully 
            with 100% client satisfiction.
        </div>
        <div className='self-start flex gap-3'>
            <FaLinkedin/>
            <FaGithub/>
            <SiGmail/>
        </div>
      </div>
      {/* right compartment */}
      <div className="flex text-white flex-col justify-center items-center w-1/2">
            <h4 className='h-20 w-20 rounded-full bg-sky-800 text-center'>GG</h4>
        </div>
    </div>
  )
}

export default Profile
