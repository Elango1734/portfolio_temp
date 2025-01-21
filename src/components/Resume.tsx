"use client"

import React from 'react'

const Resume = () => {
    const handleDownload = () => {
        const filePath = "/resume/elangovan_resume.pdf"; // Path relative to the `public` folder
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "elangovan_resume.pdf"; // Suggested file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='bg-gradient-to-b from-neutral-700 to-transparent gap-5 py-20 px-5 md:px-20 border-t-2 border-solid border-neutral-600 flex flex-col gap-9'>
            <h1 className="text-3xl font-extrabold text-primary text-center"><u>RESUME</u></h1>
            <h1 className='font-bold text-3xl text-white text-center'>Have a look at my experience</h1>
            <p className='text-center text-bodytext text-xs md:text-lg'>With extensive experience and expertise, I have had the opportunity to work on a diverse range of projects. Each service I provide is designed to deliver unique and innovative solutions tailored to your needs. Here are the key areas I specialize in</p>
            <div className='grid md:grid-cols-2 gap-9'>
                {/* HASHh Automations */}
                <div className='flex flex-col gap-3 bg-dark_transparent rounded p-10 h-fit'>
                    <h1 className='text-primary text-2xl font-extrabold'>October 2023 - Present</h1>
                    <h2 className='text-texthead text-2xl'>UI/UX Designer & Front-End Developer</h2>
                    <h3 className='text-bodytext text-lg font-mono pt-2'>HASHh Iot Labs Private Limited</h3>
                    <p className='text-bodytext pt-4'>
                        At HASHh IoT Labs Private Limited, I work as a UI/UX Designer & Front-End Developer, focusing on designing user-friendly interfaces for automation systems. I collaborate with cross-functional teams to develop intuitive and visually appealing solutions.
                        <br /><br />
                        I use design tools like Figma, Miro, Photoshop, and Illustrator to create detailed prototypes and user flows. For development, I specialize in React Native, HTML, CSS, JavaScript, and React.js to ensure smooth and responsive applications.
                        <br /><br />
                        By combining creative design with front-end development, I enhance the user experience in automation products. My role ensures that our products are functional, visually engaging, and easy to use.
                    </p>
                </div>
                {/* Edureka minternship */}
                <div className='flex flex-col gap-3 bg-dark_transparent rounded p-10 h-fit'>
                    <h1 className='text-primary text-2xl font-extrabold'>October 2022 - March 2023</h1>
                    <h2 className='text-texthead text-2xl'>UI/UX Designer & Front-End Developer</h2>
                    <h3 className='text-bodytext text-lg font-mono pt-2'>Menpani Technology</h3>
                    <p className='text-bodytext pt-4'>
                        At Menpani Technology, I worked as a UI/UX Designer & Front-End Developer, contributing to the design and development of 16+ mobile applications for diverse clients. My role focused on creating user-centered designs and ensuring seamless functionality in each project to meet the specific needs of clients.
                        <br /><br />
                        I utilized tools like Figma and Photoshop to design interfaces and interactive prototypes for mobile apps. Then, I developed these designs with React Native, ensuring cross-platform performance and a smooth user experience.
                        <br /><br />
                        Throughout my tenure, I collaborated with clients to deliver custom applications. Each project aimed to enhance user experience and provide innovative solutions tailored to client needs.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center pt-9'>
                <div
                    className='py-3 px-5 bg-primary rounded-full'
                    onClick={handleDownload}
                >
                    Download CV
                </div>
            </div>

        </div>
    )
}

export default Resume
