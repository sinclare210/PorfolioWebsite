import React from 'react'
import { Button } from './ui/button'
import Stack from './Stack'


const Intro = () => {
  return (
    <div className='bg-gray-900'>
    <div className="flex flex-col-reverse md:flex-row items-center  text-center md:text-left px-4  text-white space-y-8 md:space-y-0 md:space-x-8 mt-16 md:justify-center">
      
      {/* Text Section */}
      <div className="md:w-1/2 mt-5">
        <p className="text-lg">Hello,</p>
        <h1 className="text-4xl font-bold mt-4">
          I'm <span className="text-yellow-500">Sinclair</span>, Frontend Developer
        </h1>
        <p className="mt-4 text-lg">
          As a frontend developer, I focus on crafting intuitive, 
          visually appealing, and responsive user interfaces 
          that deliver seamless interactions across various 
          devices and screen sizes, ensuring that the experience 
          is not only functional but also engaging and accessible 
          for all users. To achieve this, I rely on a strong foundation 
          in HTML, CSS, and JavaScript, utilize modern frameworks like 
          React to build dynamic components, and prioritize performance 
          optimization, accessibility, and design aesthetics. Collaborating 
          with designers and backend teams, I ensure smooth API integrations, 
          state management, and debugging to create polished, efficient web applications.
        </p>
        <Button className="bg-yellow-400 text-black text-base font-bold rounded-lg px-5 py-2 hover:bg-yellow-300 transition duration-200 my-4">
              Contact Me
            </Button>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/4">
        <img 
          src="/mypic.jpeg" 
          alt="Sinclair" 
          className="rounded-lg shadow-lg w-96 object-cover h-96"
        />
      </div>
      
    </div>
     
       </div>
  )
}

export default Intro
