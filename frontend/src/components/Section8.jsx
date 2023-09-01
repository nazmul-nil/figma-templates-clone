
const Section8 = () => {
  return (
    <div className="w-full relative">

      <div className="max-w-[1170px] mx-auto px-6 md:px-7 xl:px-0  md:py-[110px] py-[30px] relative">
          <div className="w-full flex flex-col-reverse sm:flex-row gap-[40px] lg:gap-[30px]  items-start">
              {/* info section */}
              <div className="w-full">
                <h3 className="max-w-[470px] text-[25px] leading-[38px] md:text-[45px] md:leading-[60px] font-bold text-[#000000]">
                Customize Every Project to fit your Business. 
                </h3>
                <p className="text-[14px] leading-[22px] md:text-[18px] md:leading-[30px] font-normal text-[#4A4D45] max-w-full md:max-w-[470px] md:mt-[18px] mt-[10px]">
                Our templates save you time and money by providing the right colors, fonts and images for every budget and project. We've built a collection of unique themes and templates that work with every budget, along with powerful features that help you build beautiful websites. 
                </p>
                <div className="mt-[30px] md:mt-[40px]">
                    <button className="cursor-pointer block border-none sm:w-[283px] py-[15px] text-[#ffffff] font-semibold text-[14px] md:text-[18px] leading-[22px] md:leading-[30px] rounded-[30px] bg-[#7F54F3] text-center font-poppins md:px-0 px-5">
                    Unlock Your Pro Access 
                    </button>
                </div>
              </div>
              {/* img part */}
              <div className="w-full grid grid-cols-2 md:gap-x-[30px] gap-x-[17px] md:gap-y-5 gap-y-[10px]">
                  <img src="/section2-img-1.png" alt=""  className="h-fit rounded-[6px] w-full"/>
                  <img src="/section8-img-2.png" alt=""  className="h-fit rounded-[6px] w-full"/>
                  <img src="/section8-img-1.png" alt=""  className="h-fit rounded-[6px] w-full"/>
                  <img src="/section8-img-3.png" alt=""  className="h-fit rounded-[6px] w-full"/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Section8