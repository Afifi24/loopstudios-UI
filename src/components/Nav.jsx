import React from 'react'
import logo from '../images/logo.svg'
const Nav = () => {
  return (
    <div className='flex justify-between items-center px-10 md:px-20 py-10'>
     <div><img src={logo} alt="" /></div>
     <ul className=' gap-6 cursor-pointer hidden md:flex text-white '>
       <div className='group'>
           <li>About</li>
           <div className='mx-2 group-hover:border-b  '></div>
       </div>
       <div className='group'>
           <li>Careers</li>
           <div className='mx-2 group-hover:border-b  '></div>
       </div>
       <div className='group'>
             <li>Events</li> 
           <div className='mx-2 group-hover:border-b  '></div>
       </div>
       <div className='group'>
            <li>Products</li>
           <div className='mx-2 group-hover:border-b  '></div>
       </div>
       <div className='group'>
          <li>Support</li>
           <div className='mx-2 group-hover:border-b  '></div>
       </div>
        
     </ul>
 
    </div>
  )
}

export default Nav