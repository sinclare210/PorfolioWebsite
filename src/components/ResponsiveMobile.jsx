import React from 'react'

import { NavBarMenu } from '@/Link'

const ResponsiveMobile = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col justify-center items-center transform transition-transform duration-300"
          role="dialog"
          aria-modal="true"
        >
          <button 
            onClick={() => setOpen(false)} 
            className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>

          <div className="flex flex-col space-y-10 text-center text-white text-2xl font-bold uppercase">
            {NavBarMenu.map((menu) => (
              <a
                href={menu.link} 
                key={menu.id}
                className="hover:text-yellow-300 transition duration-200 cursor-pointer"
                smooth={true} 
                duration={500}
                onClick={() => setOpen(false)} // Close menu on link click
              >
                {menu.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ResponsiveMobile
