import Web from '@/icons/Web';
import React from 'react';
import * as mdIcons from 'react-icons/md'

type service = {
  name: string;
  detail: string;
  icon: string
}

const Services: React.FC = () => {
  const services: service[] = [
    {
      name: "Web Development",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdDeveloperMode"
    },
    {
      name: "API Development",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "API Testing",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "API Integration",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "Version Control",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "Maintenance & Optimization",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "Database Management",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "Job Scheduling & Task Automation",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "Microservices Architecture",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "DevOps & Deployment",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "Event-Driven Architecture",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    },
    {
      name: "Logging & Monitoring",
      detail: " Designing and developing interactive dashboards tailored for analytics and management.",
      icon: "MdApi"
    }



  ]
  return (
    <div className='bg-gradient-to-b from-neutral-700 to-transparent gap-5 py-20 px-5 md:px-20 border-t-2 border-solid border-neutral-600 flex flex-col gap-9'>
      <h1 className="text-3xl font-extrabold text-primary text-center"><u>SERVICES</u></h1>
      <p className='text-center text-bodytext text-xs md:text-lg'>With years of experience and knowledge, I have had the privilege to work across a diverse range of projects. Each service I offer is crafted to bring unique and innovative solutions to your needs. Below are the services I specialize in</p>
      <div className='flex-wrap gap-9 flex justify-center items-center'>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px'}}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/Web-Development.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Web Development</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/API_Development.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>API Development</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/API-Integration.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>API Integration</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/API-Development.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>API Testing</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/git.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Version Control</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/optimization.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Maintenance & Optimization</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/database.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Database Management</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/schedule.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Job Scheduling & Task Automation</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/microservice.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Microservices Architecture</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)', width:'250px' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/monitoring.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Logging & Monitoring</h1>
        </div>
        {/* <div
          style={{ background: 'rgb(225, 225, 225, 0.3)' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/Web-Development.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Web Development</h1>
        </div>
        <div
          style={{ background: 'rgb(225, 225, 225, 0.3)' }}
          className='gap-10 p-5 bg-dark_transparent flex flex-col align-center justify-center rounded-lg'>
          <div className='text-center flex justify-center'><img src="/images/Web-Development.svg" style={{color:"white"}} width={50} alt="" /></div>
          <h1 className='text-center'>Web Development</h1>
        </div> */}
      </div>

    </div>
  )
}

export default Services
