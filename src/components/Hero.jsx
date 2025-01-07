import React from 'react'
import { FaLinkedin, FaArrowDown, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import avatar from "../assets/avatar.png"

const Hero = () => {
    const SOCIAL = [
        {
            id: 1,
            link: "https://x.com/mrinalani_",
            icon: <FaSquareXTwitter />,
        },
        {
            id: 2,
            link: "https://github.com/Mrinalani",
            icon: <FaGithub />,
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/mrinalani-pandey-7684a4268",
            icon: <FaLinkedin />,
        }
    ]

    window.addEventListener('scroll', function () {
      const downArrow = document.querySelector(".down-arrow")
      if(this.scrollY >=90)downArrow.classList.add("hide-down-arrow")
        else downArrow.classList.remove("hide-down-arrow")
    })
  return (
    <section className='m-h-screen flex flex-col justify-start items-center p-5 text-center'>
      <h2 className='text-3xl text-rose-600 uppercase font-bold'>Mrinalani Pandey</h2>
      <h3 className='text-2xl py-3'>Web Developer</h3>
      <p className='max-w-xl font-light text-gray-500'>
      Hello<span className='animate-pulse text-2xl'>👋</span>, welcome to my website! I'm an experienced full-stack web developer specializing in building user-friendly websites and web applications. Let's bring your ideas to life!</p>
      {/* social icons */}
      <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
        {SOCIAL.map(({id,link,icon}) => (
            <a href={link}
               key={id}
               target='_blank'
               rel='noopner noreferrer'
             className='cursor-pointer duration-300 hover:text-rose-600'>
                {icon}
             </a>
        ))}
        </div>

        <div>
          <img src={avatar} alt="avatar" className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5'/>
          <a href="/mrinalani_pandey_resume.pdf" download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'>Resume</a>
        </div>
        <div className='mt-10 down-arrow'>
          <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
        </div>
    </section>
  )
}

export default Hero
