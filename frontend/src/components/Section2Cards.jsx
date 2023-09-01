
const Section2Cards = ({title, description, img}) => {
  return (
    <div className="w-[320px] md:w-[350px] lg:w-[370px] mx-auto border border-solid border-[#ADADAD] hover:border-[#7F54F3] gap-[20px] lg:gap-[30px] rounded-[12px] p-4 h-[482.19px] mt-5">
        <img src={img} alt="" className="w-full h-fit rounded-[6px]"/>
        <div className="p-4">
            <h3 className="text-base font-semibold text-[#0C0F03] font-manrope">
            {title}
            </h3>
            <p className="text-[14px] leading-[24px] font-normal text-[#4A4D45] mt-3 line-clamp-3 font-manrope">
                {description}
            </p>
            <button className="w-full py-2 text-[#4A4D45] hover:text-[#ffffff] font-semibold text-[16px] leading-7 rounded-[22px] hover:bg-[#7F54F3] mt-5 text-center border border-[#ADADAD]">
                Download
            </button>
        </div>
</div>
  )
}

export default Section2Cards