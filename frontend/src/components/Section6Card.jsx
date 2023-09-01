
const Section6Card = ({title, description}) => {
  return (
    <div className="lg:w-[31.5%] md:w-[31%] w-[100%] bg-white rounded-[20px] lg:p-[30px] md:p-[20px] p-[26px] border border-solid border-[#ADADAD]">
        <h6 className="text-[#000000] text-[20px] leading-[30px] md:text-[24px] md:leading-[36px] font-semibold md:mt-[30px] mt-5 mb-1.5 md:mb-2.5">
        {title}
        </h6>
        <p className="md:text-base text-[14px] leading-[22px] font-normal text-[#4A4D45]">
          {description} 
        </p>
    </div>
  )
}

export default Section6Card