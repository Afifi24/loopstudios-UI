import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pentrest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
const Footer = () => {
  return (
    <div className='bg-black p-6 flex flex-col mt-32 md:flex-row md:justify-between md:items-center'>
      <div className='mx-10 md:mx-20 flex flex-col items-center md:items-start text-[#eee] font-alata '>
        <img src={logo} alt="" />
       <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row mt-4 text-center'>
             <div className='group'>
              <a href="#">About</a>
              <div className=' mx-2 group-hover:border-b'></div>
             </div>
             <div className='group'>
              <a href="#">Careers</a>
              <div className=' mx-2 group-hover:border-b'></div>
             </div>
             <div className='group'>
              <a href="#">Events</a>
              <div className=' mx-2 group-hover:border-b '></div>
             </div>
             <div className='group'>
              <a href="#">Products</a>
              <div className=' mx-2 group-hover:border-b'></div>
             </div>
             <div className='group'>
              <a href="#">Support</a>
              <div className=' mx-2 group-hover:border-b '></div>
             </div>
       </div>
       </div>
       <div className='flex flex-col items-center mt-10 '>
           <div className='flex   space-x-4'>
            <img className='w-6' src={facebook} alt="" />
            <img className='w-6' src={twitter} alt="" />
            <img className='w-6' src={pentrest} alt="" />
            <img className='w-6' src={instagram} alt="" />
           </div>
           <div className='text-[#999] mt-4'>
            <p className='text-center'> &copy; 2022 Loopstudios. All the rights reserved.</p>
           </div>
       </div>
    </div>
  )
}

export default Footer