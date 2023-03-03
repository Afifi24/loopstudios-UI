import React from 'react'
import img from '../images/desktop/image-interactive.jpg'
import img1b from '../images/mobile/image-soccer-team.jpg'
import img1d from '../images/desktop/image-soccer-team.jpg'
import img2b from '../images/mobile/image-curiosity.jpg'
import img2d from '../images/desktop/image-curiosity.jpg'
import img3b from '../images/mobile/image-fisheye.jpg'
import img3d from '../images/desktop/image-fisheye.jpg'
import img4b from '../images/mobile/image-deep-earth.jpg'
import img4d from '../images/desktop/image-deep-earth.jpg'
import img5b from '../images/mobile/image-pocket-borealis.jpg'
import img5d from '../images/desktop/image-pocket-borealis.jpg'
import img6b from '../images/mobile/image-from-above.jpg'
import img6d from '../images/desktop/image-from-above.jpg'
import img7b from '../images/mobile/image-grid.jpg'
import img7d from '../images/desktop/image-grid.jpg'
import img8b from '../images/mobile/image-night-arcade.jpg'
import img8d from '../images/desktop/image-night-arcade.jpg'
const Loopstudios = () => {
  return (
    <div>
       <div className=" relative mx-auto max-w-6xl flex flex-col my-32 px-6 md:px-0  md:flex-row">
          <img src={img} alt="" />
          <div className='md:top-48 bg-white md:absolute md:right-0 md:py-20 md:pl-20'>
            <h2 className='uppercase font-josefin max-w-md mt-10 mb-6 text-4xl text-center text-gray-900 md:text-5xl md:mt-0 md:text-left'>the leader in interactive vr</h2>
            <p className='max-w-md mx-auto font-alata text-gray-400 leading-6 text-center md:text-left md:mx-0'>
              Founded in 2011,loopstudios has been producing world-class virtual reality prijects for the best companies around the globe.
              Our award winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
       </div>
       <div className='mx-20  flex justify-center md:justify-between my-6'>
           <h2 className='uppercase text-center font-josefin md:text-left text-3xl md:text-5xl'>our creatives</h2>
           <button className='hidden btn md:block'>see all</button>
       </div>
       {/* images items */}
       <div className='flex flex-col items-center gap-4 justify-between space-y-6 md:space-y-0 my-10 md:flex-row md:flex-wrap md:mx-20 mx-10 '>
              <div  className='group overflow-hidden relative '>
                 {/* desktop image */}
                 <img className='hidden md:block w-full group-hover:scale-110 duration-200 ' src={img4d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img4b} alt="" />
                 {/* gradient */}
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white group-hover:text-black px-6 group-hover:scale-110 duration-200'>DEEP EARTH</h5>
              </div>
              <div  className='group overflow-hidden relative '>
                 {/* desktop image */}
                 <img className='hidden md:block w-full group-hover:scale-110 duration-200' src={img8d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img8b} alt="" />
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white px-6 group-hover:scale-110 duration-200 group-hover:text-black'>NIGHT ARCADE</h5>
              </div>
              <div  className='group overflow-hidden relative '>
                 {/* desktop image */}
                 <img className='hidden md:block w-full group-hover:scale-110 duration-200' src={img1d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img1b} alt="" />
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white px-6 group-hover:scale-110 duration-200 group-hover:text-black'>SOCCER TEAM VR</h5>
              </div>
              <div  className='group overflow-hidden relative '>
                 {/* desktop image */}
                 <img className='hidden md:block w-full group-hover:scale-110 duration-200' src={img7d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img7b} alt="" />
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white px-6 group-hover:scale-110 duration-200 group-hover:text-black'>THE GRID</h5>
              </div>
              <div  className='group overflow-hidden relative '>
                 {/* desktop image */}
                 <img className='hidden md:block w-full group-hover:scale-110 duration-200' src={img6d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img6b} alt="" />
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white px-6 group-hover:scale-110 duration-200 group-hover:text-black'>FROM UP ABOVE VR</h5>
              </div>
              <div  className='group overflow-hidden relative '>
                 {/* desktop image */}
                 <img className='hidden md:block w-full group-hover:scale-110 duration-200' src={img5d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img5b} alt="" />
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white px-6 group-hover:scale-110 duration-200 group-hover:text-black'>POCKET BOREALIS</h5>
              </div>
              <div  className='group overflow-hidden relative'>
                 {/* desktop image */}
                 <img className='hidden  md:block w-full group-hover:scale-110 duration-200' src={img2d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img2b} alt="" />
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white px-6 group-hover:scale-110 duration-200 group-hover:text-black'>THE CURIOSITY</h5>
              </div>
              <div  className='group overflow-hidden relative '>
                 {/* desktop image */}
                 <img className='hidden  md:block w-full group-hover:scale-110 duration-200' src={img3d} alt="" />
                 {/* mobile image */}
                 <img className='w-full md:hidden' src={img3b} alt="" />
                 <div className='absolute right-0 left-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-70 group-hover:from-gray-50 group-hover:to-white'></div>
                 <h5 className='absolute bottom-4 text-white px-6 group-hover:scale-110 duration-200 group-hover:text-black'>MAKE IT FISHEYE</h5>
              </div>
                 
       </div>
      <div className='flex items-center justify-center text-center'>
      <button className='btn md:hidden '>see all </button>
      </div>
    </div>
  )
}

export default Loopstudios