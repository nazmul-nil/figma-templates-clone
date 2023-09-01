import Section6Card from "./Section6Card"

const Section6 = () => {
  const section6CardsArray = [
    {
      title: "Suitable for Figma ",
      description: "Figma is a powerful design platform that enables designers to create, edit and share their work. The intuitive interface allows you to collaborate with your team in real time as you design. Compatible with Figma ensures seamless integration into your workflow.",
      img: ""
    },
    {
      title: "Design Teams",
      description: "The right library can help you design faster, more consistently and even make your life easier! Get them with one click. Have a single library that works for all your content, no matter what device or platform.",
      img: ""
    },
    {
      title: "Auto Layout Included",
      description: "Auto layout makes it easy for designers to create responsive designs. It automatically adjusts elements in the design to fit different screen sizes and deliver fluid experience across multiple devices. This reduces the time and effort needed to create complex designs.",
      img: ""
    },
    {
      title: "Global Style Guide",
      description: "Our designers have created a comprehensive set of guidelines for creating consistent, user-friendly visuals for our products. These guidelines include guidelines for colors, fonts, layout and more. It also provides a library of pre-made global symbols and design elements.",
      img: ""
    },
    {
      title: "Organized Layers",
      description: "Organizing your Design's layers is crucial to effective design. By naming groups and organizing content in folders, we make it easy for you to find what you're looking for and have the information organized by key categories.",
      img: ""
    },
    {
      title: "Fully Customizable",
      description: "All design elements can be fully customized, allowing the look of your product to be uniquely tailored to your brand. You can make changes at any time and experiment with different visuals over time, creating a unique and personal look that perfectly matches your brand.",
      img: ""
    },
    {
      title: "Startups",
      description: "Design and prototype faster, with an entire library of ready components. Save time with our curated list of in-demand design assets so you can focus on what matters most -- your product roadmap.",
      img: ""
    },
    {
      title: "Free Google Font Used",
      description: "Our designers use Google's free fonts to ensure that they provide the best results for our clients. These include high quality fonts, which are easy to install and use. Additionally, they are compatible with most operating systems, making them a great choice for all types of projects.",
      img: ""
    },
  ]
  return (
    <div className="max-w-[1170px] mx-auto px-6 md:px-7 xl:px-0">
        <h3 className="max-w-[572px] text-[25px] leading-[38px] md:text-[45px] md:leading-[60px] text-center mx-auto text-[#000000] font-bold md:mb-[6px] mb-[0]">
        Design is Simple, but quality Design is rare 
        </h3>
        <p className="text-center text-[14px] leading-[22px] md:text-[20px] md:leading-[30px] font-normal text-[#4A4D45] max-w-full lg:max-w-[1030px] mx-auto mt-[18px]">
        Our Figma templates were created to solve the most common problems of designing with Figma. We've crafted a professional quality design system that brings all the features and functionality of our premium templates, without compromising on size or flexibility. 
        </p>

        {/* section 6 cards */}
        <div className="w-full flex flex-wrap justify-center mt-[30px] md:mt-[80px] gap-[30px]">
            {section6CardsArray.map(card => 
                 <Section6Card key={card.title} title={card.title} description={card.description}/>
              
              )}
        </div>
        {/* section 6 button */}
        <div className="md:mt-12 mt-[30px] flex justify-center">
            <button className="w-[220px] border-none md:py-[15px] py-[10px] text-[#ffffff] font-semibold md:text-[18px] text-[12px] md:leading-[30px] leading-[20px] rounded-[29px] bg-[#7F54F3] text-center">
              View Our Designs
            </button>
        </div>
    </div>
  )
}

export default Section6