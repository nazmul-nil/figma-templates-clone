import { useState } from 'react';
import Button from './Button';

// importing react icon
import {FiMenu} from 'react-icons/fi'
import {TfiClose} from 'react-icons/tfi'




const Nav = () => {
    const [open, setOpen] = useState(false)

    const customStyles = 'w-[80px] md:w-[110px] mr-4';
  
    const handleClick = () => {
      console.log('Button clicked!');
    };
  return (
    <nav>
        <div className='max-w-[1170px] mx-auto'>
            <div className='flex items-center justify-between  py-[15px]'>
                <div className='lg:flex lg:items-center '>
                    
                    <div className='flex items-center gap-2 px-4 lg:px-0'>
                        {open ? <TfiClose className='text-white text-lg lg:hidden' onClick={() => setOpen(!open)}/> : <FiMenu className='text-white text-2xl lg:hidden' onClick={() => setOpen(!open)}/>}
                        <img src="/logo.png" alt="" className='w-[200px]'/>
                        {/* <h1 className='text-white font-semibold text-base  ml-6 md:ml-0'>Figma templates</h1> */}
                    </div>
                    <div className={`flex flex-col lg:flex-row lg:items-center lg:ml-[150px] mt-4 lg:mt-0 px-4 py-4  absolute lg:static bg-white w-full lg:w-auto h-screen lg:h-auto lg:bg-inherit lg:z-auto z-10 ${open ? 'left-0' : 'left-[-500px]'} transition-all duration-500 ease-in-out`}>
                        <span className='text-[15px] text-black lg:text-[#ADADAD] hover:lg:text-white leading-4 font-medium mx-2 my-4 lg:my-0 cursor-pointer'>
                            Our Products
                        </span>
                        <span className='text-[15px] text-black lg:text-[#ADADAD] hover:lg:text-white leading-4 font-medium mx-2 my-4 lg:my-0 cursor-pointer'>
                            FAQ
                        </span>
                        <span className='text-[15px] text-black lg:text-[#ADADAD] hover:lg:text-white leading-4 font-medium mx-2 my-4 lg:my-0 cursor-pointer'>
                            Pricing
                        </span>
                        <button className='py-2 w-full px-3 text-[#000000] font-medium md:text-[16px] md:leading-7 text-[15px] leading-4 rounded-[29px] border-[2px] border-[#2C2C2C] mt-3 hover:border-[#7F54F3] bg-transparent hover:bg-[#7F54F3] hover:text-[#ffffff] lg:hidden'>
                          Hire Us 
                        </button>
                        <button className='py-2 md:px-6 w-full px-3 text-[#ffffff] font-medium md:text-[16px] md:leading-7 text-[15px] leading-5 rounded-[29px] bg-[#7F54F3] mt-3 lg:hidden'>
                          Sign In 
                        </button>
                    </div>

                </div>
                <div className='flex items-center gap-5'>
                    <button className='hidden lg:block cursor-pointer bg-black border border-solid border-[#ADADAD] rounded-[29px] hover:border-none leading-5 md:leading-7 hover:bg-[#7F54F3] hover:text-white font-medium text-[11px] md:text-[16px] py-2 px-3 md:px-6  text-[#ADADAD]'>
                        Hire Us
                    </button>
                    <button className='hidden lg:block cursor-pointer bg-black border-none  rounded-[29px] hover:border-none leading-5 md:leading-7 hover:bg-[#7F54F3] hover:text-white font-medium text-[11px] md:text-[16px] py-2 px-3 md:px-6  text-[#ADADAD]'>
                        Sign In
                    </button>
                    <Button styles={customStyles} onClick={handleClick} className="border-none">
                        Sign Up
                    </Button>

                </div>
            </div>

        </div>
        {/* <div className='w-full h-[0.1px] bg-[#e5e7eb]'></div> */}
    </nav>
  )
}

export default Nav