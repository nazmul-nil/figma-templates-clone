import { useState } from 'react';
import Button from './Button';

// importing react icon
import {FiMenu} from 'react-icons/fi'
import {TfiClose} from 'react-icons/tfi'
import {IoIosArrowDown} from 'react-icons/io'


// import Link tag
import { Link } from 'react-router-dom';
import HireUsModal from './HireUsModal';




const Nav = () => {
    const [open, setOpen] = useState(false)

    // Modal state
    const [showModal, setShowModal] = useState(false)

    const customStyles = 'w-[80px] md:w-[110px] mr-4';
  
    const handleClick = () => {
      console.log('Button clicked!');
    };
  return (
    <nav className='w-full bg-black'>
        <div className='max-w-[1170px] mx-auto'>
            <div className='flex items-center justify-between  py-[15px]'>
                <div className='lg:flex lg:items-center '>
                    
                    <div className='flex items-center gap-2 px-4 lg:px-0'>
                        {open ? <TfiClose className='text-white text-lg lg:hidden' onClick={() => setOpen(!open)}/> : <FiMenu className='text-white text-2xl lg:hidden' onClick={() => setOpen(!open)}/>}
                        <Link to={'/'} className=''>
                          <img src="/logo.png" alt="" className='w-[200px] lg:w-[230px] cursor-pointer'/>
                        </Link>
                        {/* <h1 className='text-white font-semibold text-base  ml-6 md:ml-0'>Figma templates</h1> */}
                    </div>
                    <div className={`flex flex-col lg:flex-row lg:items-center lg:ml-[150px] mt-4 lg:mt-0 px-4 py-4  absolute lg:static bg-white w-full lg:w-auto h-screen lg:h-auto lg:bg-inherit lg:z-auto z-10 ${open ? 'left-0' : 'left-[-900px]'} transition-all duration-500 ease-in-out`}>
                        <Link to={'/products'} className='my-4 lg:my-0 flex items-center'>
                            <span className='text-[16px] text-black lg:text-[#ADADAD] hover:lg:text-white leading-4 font-semibold mx-1 my-4 lg:my-0 cursor-pointer'>
                                Our Products
                            </span>
                            <IoIosArrowDown className='text-black lg:text-[#ADADAD]'/>
                        </Link>
                        <Link to={'/faq'} className='my-4 lg:my-0'>
                            <span className='text-[16px] text-black lg:text-[#ADADAD] hover:lg:text-white leading-4 font-semibold mx-4 my-4 lg:my-0 cursor-pointer'>
                                FAQ
                            </span>
                        </Link>
                        <Link to={'/pricing'} className='my-4 lg:my-0'>
                            <span className='text-[16px] text-black lg:text-[#ADADAD] hover:lg:text-white leading-4 font-semibold mx-4 my-4 lg:my-0 cursor-pointer'>
                                Pricing
                            </span>
                        </Link>
                        <button className='py-2 w-full px-3 text-[#000000] font-medium md:text-[16px] md:leading-7 text-[15px] leading-4 rounded-[29px] border-[1px] border-[#2C2C2C] mt-3 hover:border-[#7F54F3] bg-transparent hover:bg-[#7F54F3] hover:text-[#ffffff] lg:hidden' onClick={() => setShowModal(true)}>
                          Hire Us 
                        </button>
                        
                        <button className='py-2 md:px-6 w-full px-3 text-[#ffffff] font-medium md:text-[16px] md:leading-7 text-[15px] leading-5 rounded-[29px] bg-[#7F54F3] mt-3 lg:hidden'>
                          Sign In 
                        </button>
                    </div>

                </div>
                <div className='flex items-center gap-5'>
                    <button className='hidden lg:block cursor-pointer bg-black border-[0.5px] border-solid border-[#ADADAD] rounded-[29px] hover:border-none leading-5 md:leading-7 hover:bg-[#7F54F3] hover:text-white font-medium text-[11px] md:text-[16px] py-2 px-3 md:px-6  text-[#ADADAD]' onClick={() => setShowModal(true)}>
                        Hire Us
                    </button>
                    <HireUsModal isVisible={showModal} onClose={() => setShowModal(false)}>
                        {/* left div */}
                        <div className='hidden lg:block p-[60px]'>
                            <h1 className='text-[36px] leading-[42px] font-normal text-[#121212]'>
                                Say
                            </h1>
                            <h3 className='text-[96px] leading-[96px] font-bold text-[#121212] mt-[32px] ml-3'>
                                Hello!
                            </h3>
                        </div>
                        {/* right div */}
                        <div className='w-full py-0 lg:py-[30px] lg:pr-[60px]'>
                            <div className='bg-[#EAEAEA;] p-3 lg:p-[30px] rounded-[10px]'>
                                <p className='text-[18px] leading-[24px] lg:text-[18px] lg:leading-[24px] font-medium'> 
                                What are you looking for? 
                                </p>
                                <form action="" className='mt-[30px] space-y-5'>
                                    {/* name */}
                                    <div>
                                        <p className='text-sm font-medium text-black'>
                                        Full Name
                                        </p>
                                        <input type="text" placeholder='Full Name' className='w-full focus:outline-blue-500 border border-[#4D4D4D33]/20 rounded-lg bg-transparent mt-[10px] p-2'/>
                                    </div>
                                    {/* email */}
                                    <div>
                                        <p className='text-sm font-medium text-black'>
                                        Email
                                        </p>
                                        <input type="email" placeholder='Email' className='w-full focus:outline-blue-500 border border-[#4D4D4D33]/20 rounded-lg bg-transparent mt-[10px] p-2'/>
                                    </div>
                                    {/* text area */}
                                    <div>
                                        <p className='text-sm font-medium text-black'>
                                        How did you hear about us?
                                        </p>
                                        <textarea name="" id="" cols="30" rows="5" placeholder='Message' className='w-full focus:outline-blue-500 border border-[#4D4D4D33]/20 rounded-lg bg-transparent mt-[10px] resize-none p-2'></textarea>
                                    </div>
                                    {/* Submit button */}
                                    <button type='submit' className='bg-[#6F28D8] py-3 text-sm font-semibold text-white w-full rounded-lg border-none cursor-pointer'>
                                    Contact Us 
                                    </button>
                                </form>
                            </div>
                        </div>
                    </HireUsModal>
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