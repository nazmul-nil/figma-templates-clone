
const Section7 = () => {
  return (
    <div className=" pt-[10px] md:py-[80px] pb-[10px] font-poppins text-black">
        <div className="max-w-[1170px] mx-auto lg:px-0 px-4 relative">
            <div className="text-center mb-5 md:mb-[50px]">
                <h3 className="max-w-[572px] text-[25px] leading-[38px] md:text-[45px] md:leading-[60px] text-center mx-auto text-[#000000] font-bold md:mb-[6px] mb-[0]">
                Choose Your Plan 
                </h3>
                <p className="text-center text-[14px] leading-[22px] md:text-[20px] md:leading-[30px] font-normal text-[#4A4D45] max-w-full xl:max-w-[1030px] mx-auto md:mt-[18px] mt-[10px]">
                Join now to Save Money & Time On Design Assets 
                </p>
            </div>
            {/* pricing part */}
            <div>
                <div className="md:w-[740px] w-full  mx-auto flex flex-col md:flex-row justify-center items-center relative">
                   {/* left pricing */}
                    <div className="md:w-[485px] w-full rounded-[12px] border border-solid border-[#ADADAD] md:rounded-tr-none rounded-tr-[12px] pb-[64px] relative">
                        <div className="w-full h-4 bg-[#7F54F3] top-[-1px] right-0 rounded-tl-[12px] rounded-tr-[12px] md:rounded-tr-none"></div>
                        <div className="px-[20px]">
                            <h4 className="text-[22px] leading-[34px] font-semibold text-[#0C0F03] mt-5">Yearly</h4>
                            <div className="flex items-center gap-2 mt-[6px]">
                                <p className="font-bold text-[50px] leading-[60px] text-[#0C0F03] font-inter">
                                $49 
                                </p>
                                <p className="text-[18px] leading-[30px] font-normal text-[#4A4D45] font-manrope">
                                Yearly Plan 
                                </p>
                            </div>
                            <hr className="mt-[20px] h-[1px] bg-[#0C0F03] border-none"/>
                            <button className="block border-none w-full py-[15px] text-[#ffffff] font-semibold text-[18px] leading-[30px] rounded-[30px] bg-[#7F54F3] text-center font-poppins mt-5">
                                Get Started
                            </button>
                            <ul className="mt-[36px] space-y-4 sm:space-y-4 font-poppins">
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Unlimited downloads of FREE resources 
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Advanced Search 
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Use Personal And Commercial  
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Unlimited PREMIUM downloads 
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Weekly content updates 
                                    </span>
                                </li>   
                            </ul>
                        </div>
                    </div>

                    {/* right pricing */}
                    <div className="mt-4 md:mt-0 md:w-[485px] w-full rounded-[12px] border border-solid border-[#ADADAD] md:rounded-tl-none rounded-tl-[12px] pb-[64px] relative">
                        <div className="w-full h-4 bg-[#011243]  top-[-1px] right-0 rounded-tr-[12px] rounded-tl-[12px] md:rounded-tl-none"></div>
                        <div className="px-[20px]">
                            <h4 className="text-[22px] leading-[34px] font-semibold text-[#0C0F03] mt-5">Yearly</h4>
                            <div className="flex items-center gap-2 mt-[6px]">
                                <p className="font-bold text-[50px] leading-[60px] text-[#0C0F03] font-inter">
                                $79 
                                </p>
                                <p className="text-[18px] leading-[30px] font-normal text-[#4A4D45] font-manrope">
                                One time payment
                                </p>
                            </div>
                            <hr className="mt-[20px] h-[1px] bg-[#0C0F03] border-none"/>
                            <button className="block border-none w-full py-[15px] text-[#ffffff] font-semibold text-[18px] leading-[30px] rounded-[30px] bg-[#011243]  text-center font-poppins mt-5">
                                Get Started
                            </button>
                            <ul className="mt-[36px] space-y-4 sm:space-y-4 font-poppins">
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Unlimited downloads of FREE resources 
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Advanced Search 
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Use Personal And Commercial  
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Unlimited PREMIUM downloads 
                                    </span>
                                </li>   
                                <li className="flex items-center gap-[8px]">
                                    <div className="w-[5px] h-[5px] rounded-full bg-gray-700" ></div>
                                    <span className="text-[14px] leading-[20px] font-normal text-[#4A4D45]">
                                    Weekly content updates 
                                    </span>
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section7