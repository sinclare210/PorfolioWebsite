import React from 'react'

const Portfolio = () => {
  return (
    <div className='bg-gray-900'>
        <div className="py-10 px-6 md:w-3/4 flex flex-col justify-center items-center mx-auto">
            <div className='text-4xl font-bold mb-6 text-center text-yellow-400'>
                My Past Works
            </div>
            <div className='mb-10 text-center text-lg text-white'>
                I take pride in paying attention to the smallest details and making sure that my 
                work is pixel perfect. I am excited to bring my skills and experiences to help businesses
                achieve their goals and create a strong online presence.
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                <a href='https://todo-list-project-mrzp.vercel.app/' target='_blank' rel='noopener noreferrer' className="block transform hover:scale-105 transition-transform duration-300">
                    <img className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto" src="public/screencapture-todo-list-project-mrzp-vercel-app-2024-09-19-09_34_55.png" alt="To-do List Project" />
                </a>
                <a href='https://meme-generator-two-ochre.vercel.app/' target='_blank' rel='noopener noreferrer' className="block transform hover:scale-105 transition-transform duration-300">
                    <img className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto" src="public/screencapture-localhost-5173-2024-09-30-05_10_53.png" alt="Meme Generator" />
                </a>
                <a href='https://sinc-view.vercel.app/' target='_blank' rel='noopener noreferrer' className="block transform hover:scale-105 transition-transform duration-300">
                    <img className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto" src="public/screencapture-sinc-view-vercel-app-2024-10-17-05_39_32.png" alt="Sinc View" />
                </a>
                <a href='https://quiz-app-ten-green-22.vercel.app/' target='_blank' rel='noopener noreferrer' className="block transform hover:scale-105 transition-transform duration-300">
                    <img className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto" src="public/screencapture-quiz-app-ten-green-22-vercel-app-2024-10-17-05_34_30.png" alt="Quiz App" />
                </a>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
