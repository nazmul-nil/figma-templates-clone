
const Section10 = () => {
  return (
    <div className="w-full bg-[#F6F8FA] relative">
        <div className="max-w-[1170px] mx-auto px-6 md:px-7 xl:px-0 font-poppins md:py-[90px] py-[30px] relative">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center gap-[20px] lg:gap-[30px] cursor-pointer">
                {/* img part */}
                <div className="w-full grid grid-cols-2 gap-x-[17px] md:gap-x-[30px] gap-y-[10px] md:gap-y-5">
                    <img src="/section2-img-1.png" alt="" className="h-fit rounded-[6px] w-full"/>
                    <img src="/section10-img-2.png" alt="" className="h-fit rounded-[6px] w-full"/>
                    <img src="/section8-img-2.png" alt="" className="h-fit rounded-[6px] w-full"/>
                    <img src="/section8-img-1.png" alt="" className="h-fit rounded-[6px] w-full"/>
                </div>
                {/* description part */}
                <div className="w-full lg:pl-[100px]">
                    <h3 className="max-w-[470px] text-[25px] leading-[38px] md:text-[45px] md:leading-[60px] font-semibold text-[#000000]">
                    Order Any Type of Custom Design 
                    </h3>
                    <div className="mt-[20px] md:mt-[40px]">
                        <button className="border-none cursor-pointer block sm:w-[188px] md:px-0 px-[40px] py-[15px] text-[#ffffff] font-semibold md:text-[18px] text-[14px] md:leading-[30px] leading-[22px] rounded-[30px] bg-[#7F54F3] text-center font-poppins">
                        Hire US 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section10