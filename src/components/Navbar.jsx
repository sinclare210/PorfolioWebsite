import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-scroll'
import { NavBarMenu } from '@/Link'


const Navbar = () => {
  return (
    <div className='top-0 flex justify-between px-4 pt-5 md:px-28'>
        <div><img src="public/vite.svg" alt="" /></div>
        <div className='flex justify-between space-x-6 md:space-x-16 cursor-pointer font-bold'>
            <Link className='hover:border-b-2 hover:border-yellow-200'>
                Home
            </Link>
            <Link className='hover:border-b-2 hover:border-yellow-200'>
                About
            </Link>
            <Link className='hover:border-b-2 hover:border-yellow-200'>
                Portfolio
            </Link>
           <Link className='hover:border-b-2 hover:border-yellow-200'>
                Clients
            </Link>
        </div>
        <div>
            <Button className="bg-white text-black text-base font-bold rounded-lg hover:bg-yellow-200">Contact Me</Button>
        </div>
    </div>
  )
}

export default Navbar