import Section2Cards from "./Section2Cards"
import Button from "./Button"

const Section2 = () => {
    const customStyles = "w-[230px] md:py-[15px] py-[10px]  text-[#ffffff] font-semibold md:text-[18px] text-[12px] "
    const section2CardsArray = [
        {
            title:"Multipurpose Ecommerce Theme",
            description: " The Multipurpose E-commerce Theme is a versatile and feature-rich website template designed specifically for online stores and businesses. It offers a comprehensive set of tools and functionalities that cater to various industries and product categories, making it suitable for a wide range of e-commerce applications. The theme offers a wide range of customization options to ensure your online store reflects your brand's identity.",
            img: "/section2-img-1.png"
        },
        {
            title:"Travel Agency Landing Page",
            description: "Welcome to the Efficient Travel Agency Landing Page Template! This Figma file is your all-in-one solution to kickstart your travel agency business and create an engaging, visually appealing landing page that converts visitors into happy travelers.",
            img: "/section2-img-2.png"
        },
        {
            title:"Podcast landing Page Design",
            description: "Hello everybody! This is the landing page design concept for the podcast website. where you may post your music, listen to podcasts, and become a podcaster. The most recent UI trend was used in its design. You can use this landing page template on your website if you're launching a platform similar to this. Thanks!",
            img: "/section2-img-3.png"
        },
        {
            title:"Insurance landing Page Design",
            description: "Hello design lovers. Here is another Landing Page for you. The Insurance Company Landing Page was created for them. One of the things people consider in a crisis is insurance. Encourage them to decide sooner. Show them the options and advantages, then include images and persuading copy. Unbounce's responsive landing page template for insurance is available here. This template is incredibly simple to alter. In a few minutes, you can alter the colors, create new sections and widgets, and replace the images. This Insurance website template is accessible in the Figma file.",
            img: "/section2-img-4.png"
        },
        {
            title:"Furniture Website Landing Page Design",
            description: "This is a great furniture website landing page. It's easy to use and looks great! The best furniture websites are the ones that make it easy for you to find exactly what you're looking for. Our website is designed to make sure that's true, with a user-friendly layout and intuitive navigation so you can get to the products faster than ever before.",
            img: "/section2-img-5.png"
        },
    ]
  return (
    <div className="max-w-[1170px] mx-auto px-6 xl:px-0 md:pt-[60px] pt-[30px] md:pb-[80px] pb-[30px] relative">
        <h1 className="text-black text-[24px] md:text-[45px] md:leading-[60px] text-center mx-auto leading-[36px]  font-extrabold md:mb-[6px]">
            Featered UI Resourches
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] md:mt-[50px]">
            {/* UI resourches cards */}
           {section2CardsArray.map(card => 
             <Section2Cards key={card.title} title={card.title} description={card.description} img={card.img}/>
            )}
        </div>
        <div className="flex items-center justify-center mt-12">
            <Button styles={customStyles} >View All Resourches</Button>
        </div>
    </div>
  )
}

export default Section2