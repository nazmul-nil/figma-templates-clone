import Button from "./Button"

const Section3 = () => {
    const customStyles = "w-[260px] font-semibold md:text-[18px] text-[14px] md:leading-[30px] leading-[22px] "
  return (
    
    <div className=" bg-[#1b2535]">
        <div className=" max-w-[1170px] mx-auto py-[30px] md:py-[80px]">
            <h3 className="px-[30px] lg:px-0 text-center text-[16px]  leading-[38px] md:text-[45px] md:leading-[60px] font-bold max-w-[770px] mx-auto text-white">
            Access all the design from Figma Templates and get started with your next project. 
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:gap-[40px] my-[40px] lg:my-[50px] mx-auto px-6">
                <div className="flex flex-col items-center mt-4">
                    <img src="/section2-img-1.png" alt="" className="rounded-[7px] w-[330px] md:w-[210px] md:h-[180px] h-[284px] lg:w-[370px] lg:h-[308px] object-cover"/>
                    <h4 className="font-semibold text-[20px] leading-[41px] lg:text-[30px] md:leading-[46px] mt-6 md:mt-[30px] text-center text-white max-w-[300px] mx-auto">
                    Business Solution Theme
                    </h4>
                </div>
                <div className="flex flex-col items-center mt-4">
                    <img src="/section2-img-1.png" alt="" className="rounded-[7px] w-[330px] md:w-[210px] md:h-[180px] h-[284px] lg:w-[370px] lg:h-[308px] object-cover"/>
                    <h4 className="font-semibold text-[20px] leading-[41px] lg:text-[30px] md:leading-[46px] mt-6 md:mt-[30px] text-center text-white max-w-[300px] mx-auto">
                    Ecommerce Web App 
                    </h4>
                </div>
                <div className="flex flex-col items-center mt-4">
                    <img src="/section3-img.png" alt="" className="rounded-[7px] w-[330px] md:w-[210px] md:h-[180px] h-[284px] lg:w-[370px] lg:h-[308px] object-cover"/>
                    <h4 className="font-semibold text-[20px] leading-[41px] lg:text-[30px] md:leading-[46px] mt-6 md:mt-[30px] text-center text-white max-w-[300px] mx-auto">
                    Multiple Landing Page 
                    </h4>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Button styles={customStyles}>See Plan and Pricing</Button>
            </div>
        </div>
    </div>
  )
}

export default Section3