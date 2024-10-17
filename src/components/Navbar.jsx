import React, { useState } from 'react'
import { Button } from './ui/button'
import { Link } from 'react-scroll'
import { NavBarMenu } from '@/Link'
import ResponsiveMobile from './ResponsiveMobile'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-5 md:px-10">
          <div className="hidden md:block">
            <div className="flex space-x-8 text-lg font-bold">
              {NavBarMenu.map((menu) => (
                <Link 
                  to={menu.link} 
                  key={menu.id} 
                  className="hover:text-yellow-300 transition duration-200 cursor-pointer"
                  smooth={true} 
                  duration={500}
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <img src="/menu-line.svg" alt="Menu" className="w-8 h-8 cursor-pointer" />
          </div>

          <div>
            <Button className="bg-yellow-400 text-black text-base font-bold rounded-lg px-5 py-2 hover:bg-yellow-300 transition duration-200">
              Contact Me
            </Button>
          </div>
        </div>
      </nav>

      <ResponsiveMobile open={open} setOpen={setOpen} />
    </>
  )
}

export default Navbar
