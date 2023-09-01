// importing social media icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="bg-black">
        <div className="max-w-[1170px] mx-auto px-5 xl:px-0 pt-5 lg:pt-20">
            <div className="flex justify-between flex-wrap gap-x-8 md:gap-x-16 gap-y-8">
                {/* description part */}
                <div>
                    <img src="/logo.png" alt="" />
                    <p className="max-w-[311px] text-sm leading-[24px] font-normal text-white mt-5">
                    Figma templates is a community of web designers and developers who share a love for creating beautiful, powerful and engaging interfaces. 
                    </p>    
                </div>
                {/* Company part */}
                <div>
                    <p className="text-[18px] leading-[32px] text-white font-medium">
                    Company
                    </p>
                    <ul className="md:text-white text-[#ADADAD] text-sm space-y-[14px] mt-[10px]">
                        <li className="hover:text-primary cursor-pointer">Home</li>
                        <li className="hover:text-primary cursor-pointer">Design Resources</li>
                        <li className="hover:text-primary cursor-pointer"> Help Center </li>
                        <li className="hover:text-primary cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-primary cursor-pointer">Privacy & Policy</li>
                        <li className="hover:text-primary cursor-pointer">Refund Policy</li>
                    </ul>
                </div>
                {/* Our product part */}
                <div>
                    <p className="text-[18px] leading-[32px] text-white font-medium">
                    Our Product
                    </p>
                    <ul className="md:text-white text-[#ADADAD] text-sm space-y-[14px] mt-[10px]">
                        <li className="hover:text-primary cursor-pointer"> UIHUT</li>
                        <li className="hover:text-primary cursor-pointer">Flowgiri</li>
                        <li className="hover:text-primary cursor-pointer"> Ezytor</li>
                        <li className="hover:text-primary cursor-pointer">Graphicsly</li>
                        
                    </ul>
                </div>
                {/* Social media part */}
                <div>
                    <p className="text-white text-[18px] leading-[32px] font-medium">
                        Social
                    </p>
                    <figure className="flex gap-3 mt-3"> 
                        {/* facebook */}
                        <div className="flex justify-center ml-10 gap-2 items-center w-7 h-7 rounded-[8px] ">
                            <FacebookIcon color='primary' className='cursor-pointer hover:bg-[white] rounded-[4px] transition-all duration-300 ease-in-out  '/>
                            <InstagramIcon color='primary' className='cursor-pointer hover:bg-[white] rounded-[4px] transition-all duration-300 ease-in-out'/>
                            <TwitterIcon color='primary' className='cursor-pointer hover:bg-[white] rounded-[4px] transition-all duration-300 ease-in-out'/>
                            <LinkedInIcon color='primary' className='cursor-pointer hover:bg-[white] rounded-[4px] transition-all duration-300 ease-in-out' />
                        </div>
                    </figure>
                </div>
            </div>
        </div>
        <hr className='border border-solid border-[#2C2C2C] mt-[30px]'/>    
        <p className='text-[14px] leading-[22px] text-white text-center font-normal py-5 lg:pt-10 lg:pb-[35px] font-inter'>
        Figma templates | © 2023 All Rights Reserved 
        </p>
    </div>
  )
}

export default Footer