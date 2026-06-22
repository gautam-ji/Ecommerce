import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-20 mt-20 ml-20 text-sm' >

      <div>
         <img src={assets.logo} className='mb-5 w-32' alt=''/>
         <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta repellat temporibus natus quos velit voluptate eum fugiat inventore tempora ipsa quae, tenetur, iste ex. Aliquid tempora atque enim quod.
         </p>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600' >
             <li>HOME</li>
             <li>ABOUT US</li>
             <li>DELIVERY</li>
             <li>PRIVACY POLICY</li>
          </ul>
      </div>

      <div>
        <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'  >
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
        </ul>
      </div>

      <div className='center'>
        <hr className='w-1/2 center'/>
        <p className='py-5 text-sm '>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
        
    </div>
  )
}

export default Footer