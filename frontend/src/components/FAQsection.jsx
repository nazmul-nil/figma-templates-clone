// import FAQItem from "./FAQItem";
import { useState } from 'react';


const FAQsection = () => {
  const [selected, setSelected] = useState(null);

  const toggleContent = (i) => {
    if(selected === i){
     return setSelected(null)
    }
    setSelected(i)
  };
    const faqs = [
        {
          question: 'What is figma design platform?',
          answer: ' Figma templates is a website with free and premium design materials to help you advance your design. It does not matter if you are a web designer, an app developer, or a product manager; Figma templats provide you with all the tools you need to create websites and apps quickly and easily. ',
        },
        {
          question: ' Can I use the design in my portfolio? ',
          answer: ' No, you can’t use the Figma templates designs in your portfolio. All the designs you can use for your work, for learning design, and clients’ work. ',
        },
        {
          question: ' What design files are available? ',
          answer: ' We are providing the designs files in Figma . You can download all the designs in Figma templates.  ',
        },
        {
          question: ' Can I sell your design by doing code? ',
          answer: ' Nope, you can’t sell our design by doing code. We don’t allow to sell our designs.  ',
        },
        {
          question: ' What can I use Figma templates resources for? ',
          answer: ' Use this item in your own or your client’s project. Figma templates can also be used in any marketing collateral, and advertising campaigns such as web apps, mobile apps, web templates, etc.  ',
        },
        // Add more FAQs
      ];
    
      return (

        <div className=" py-[40px] md:py-[70px] w-full font-poppins text-black">
            <div className="max-w-[770px] lg:px-0 px-6 mx-auto">
                <header className="text-center mb-[30px] lg:mb-[50px]">
                    <h1 className="max-w-[570px] text-center text-[25px] leading-[38px] md:text-[45px] md:leading-[60px] font-bold text-[#000000] mx-auto">
                    Frequently Asked Questions 
                    </h1>
                    <p className="text-center text-[14px] leading-[22px] md:text-[20px] md:leading-[30px] font-normal text-[#4A4D45] max-w-full sm:max-w-[570px] mx-auto md:mt-[18px] mt-[10px]">
                    Here is a list of the most common questions we receive about the topics on this website. 
                    </p>
                </header>
                {/* faq container */}
                <div className=" text-[#0B1024] lg:mt-[70px]">
                    <div className="space-y-5 lg:space-y-[30px]">
                    {faqs.map((faq, index) => (

                      <div key={index}>
                        <div onClick={() => toggleContent(index)} className='border border-solid border-[#ADADAD] rounded-[12px] hover:border-[#7f54f3] cursor-pointer md:p-[30px] p-[20px]'>
                          <div className='flex justify-between items-start'>
                              <h4 className='text-[22px] leading-[32px] font-medium text-black'>
                              {faq.question} 
                              </h4>  
                              <button className={selected === index ? "cursor-pointer border-none transition-all bg-[#7f54f3] text-white  w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-[100%] p-1 text-2xl flex items-center justify-center" : "flex items-center justify-center cursor-pointer border border-solid border-[#7f54f3] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-[100%] p-1 text-2xl" }
                                  >
                                      {selected === index   ? '-' : '+'}
                            </button> 
                          </div>
                           <p className={selected === index ? "show trans  text-[15px] leading-[22px] text-[#4A4D45] mt-[14px]" : "hidden trans"}> 
                            {faq.answer}
                           </p>
                        </div>
                      </div>
                      // <FAQItem key={index} toggleContent={toggleContent} question={faq.question} answer={faq.answer} selected={selected} />
                     ))}
                    </div>
                </div>
            </div>
        </div>
        // <div className="container mx-auto py-8">
        //   <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        //   {faqs.map((faq, index) => (
        //     <FAQItem key={index} question={faq.question} answer={faq.answer} />
        //   ))}
        // </div>
      );
}

export default FAQsection