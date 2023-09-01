import Nav from "./Nav"
// importing material search icon
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="bg-black  ">
        <Nav />
        <div className=" max-w-[90%] mx-auto">
            <h1 className="mt-10 text-white text-[28px] md:text-[60px] leading-[38px] md:leading-[70px] font-bold tracking-[-1%]  text-center">
                 Discover the best figma <br/> resources available in one place
            </h1>
            <p className="pb-5 text-[14px] md:text-[18px] leading-[22px] md:leading-[30px] font-normal  text-center text-[#ADADAD] md:pt-5 pt-4 md:max-w-[570px] mx-auto ">
            Figma templates is a community of web designers and <br/> developers who share a love for creating beautiful interfaces. 
            </p>
            <div className="flex items-center justify-center pb-[50px] max-w-[500px] mx-auto relative ">
                
                <input type="search" name="" id="" placeholder="Search for designs" className="border border-solid  border-[#7F54F3] w-[500px] focus:ring-0   md:h-[58px] md:text-[16px] md:leading-7 text-[11px] leading-[19px] h-[40px] rounded-[30px] text-[#15151E] placeholder:text-[#ADADAD] px-4 "/>
                <button type="submit" className="border-none flex justify-center items-center bg-[#7F54F3] rounded-[30px] md:h-[58px] h-[40px] md:w-[58px] w-[40px] absolute right-[-1px] top-0">
                    <SearchIcon className="text-white flex items-center justify-center"/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header