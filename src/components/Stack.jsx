import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Stacks } from '@/About'

const Stack = () => {
  return (
    <>

      <div className='flex flex-col items-center space-y-6 mt-10 bg-black py-10'>
        <div className='font-bold text-3xl'>
          <h1>What I do</h1>
        </div>
        <div className='md:w-3/4 px-4 text-center'>
          <p>I'm a passionate frontend developer 
            with a love for crafting seamless 
            user interfaces and a knack for 
            building decentralized applications 
            (dApps). I bridge the gap between 
            intuitive user experiences and the 
            powerful world of blockchain, writing 
            secure and efficient smart contracts to 
            bring innovative ideas to life. As a DeFi enthusiast, 
            I specialize in creating solutions that empower users in the 
            decentralized finance ecosystem, combining my frontend skills 
            with my knowledge of smart contract development to deliver responsive, secure, and user-centric applications.</p>
        </div>
        <div className='flex-col px-4 md:w-3/4 cursor-pointer space-y-4'>
        {Stacks.map((stack) =>
            <Card className="bg-[rgb(30,30,30)] shadow-md p-6" key={stack.id}>
            <CardHeader>
              <CardTitle className='text-white'>{stack.title}</CardTitle>
              <CardDescription>{stack.more}</CardDescription>
            </CardHeader>
           </Card>
        )}
          
        </div>
      </div>
    </>
  )
}

export default Stack
