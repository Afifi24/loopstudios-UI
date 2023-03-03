import React,{useState} from 'react'
import logo from '../images/logo.svg'
import humberger from '../images/icon-hamburger.svg'
import Close from '../images/icon-close.svg'
const Nav = () => {
  const [isopen,setIsopen] = useState(false)
  const togglemenu = ()=>{
       setIsopen(!isopen)
  }
  const close = ()=>{
       setIsopen(false)
  }
  return (
    <div className=' flex justify-between items-center px-10 md:px-20 py-10'>
     <div><img src={logo} alt="" /></div>
     <ul className=' gap-6 cursor-pointer hidden md:flex text-white '>
       <div  className='group'>
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
     {/* menu */}
     <div onClick={togglemenu} className='cursor-pointer  md:hidden z-20 '><img src={isopen?Close: humberger} alt="" /></div>
       {isopen && <div className={`isopen ? active :'' absolute  z-10 top-0 -left-full w-full  md:hidden min-h-screen bg-black flex flex-col items-start pt-10 pl-4 gap-20  duration-500 `}>
        <div><img src={logo} alt="" /></div>
     <ul className=' gap-6 cursor-pointer space-y-6 text-left md:flex font-josefin text-3xl text-white uppercase '>
       <div onClick={close} className='group'>
           <li>About</li>
           <div className='mr-6 group-hover:border-b  '></div>
       </div>
       <div onClick={close} className='group'>
           <li>Careers</li>
           <div className='mr-4 group-hover:border-b  '></div>
       </div>
       <div onClick={close} className='group'>
             <li>Events</li> 
           <div className='mr-6 group-hover:border-b  '></div>
       </div>
       <div onClick={close} className='group'>
            <li>Products</li>
           <div className='mr-2 group-hover:border-b  '></div>
       </div>
       <div onClick={close} className='group'>
          <li>Support</li>
           <div className='mr-2 group-hover:border-b  '></div>
       </div>
        
     </ul>
     </div>}
 
    </div>
  )
}

export default Nav