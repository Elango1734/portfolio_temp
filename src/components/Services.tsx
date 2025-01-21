import Image from 'next/image';
import React from 'react';

const Services: React.FC = () => {

  return (
    <div className='bg-gradient-to-b from-neutral-700 to-transparent gap-5 py-20 px-5 md:px-20 border-t-2 border-solid border-neutral-600 flex flex-col gap-9'>
      <h1 className="text-3xl font-extrabold text-primary text-center"><u>SERVICES</u></h1>
      <p className='text-center text-bodytext text-xs md:text-lg'>With years of experience and knowledge, I have had the privilege to work across a diverse range of projects. Each service I offer is crafted to bring unique and innovative solutions to your needs. Below are the services I specialize in</p>
      <div className='flex-wrap gap-9 flex justify-center items-center'>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/app_development.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>Android Development</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/ios-dev.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>iOS Development</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/Web-Development.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>Web Development</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/API-Integration.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>API Integration</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/app-design.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>APP Design</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/web_design.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>Website Design</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/graphic.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>Graphic Design</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width: '250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/icon.svg" style={{ color: "white" }} width={50} height={50} alt="" /></div>
          <h1 className='text-center'>Icon Design</h1>
        </div>
        {/* <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><Image src="/images/git.svg" style={{color:"white"}} width={50}  height={50} alt="" /></div>
          <h1 className='text-center'>Git</h1>
        </div> */}
      </div>
    </div>
  )
}

export default Services
