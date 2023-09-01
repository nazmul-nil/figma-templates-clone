
const FAQItem = ({ question, answer, toggleContent, selected, key }) => {
  // const [selected, setSelected] = useState(null);

  // const toggleContent = () => {
  //   if(selected === key){
  //     setSelected(null)
  //   }
  //   setSelected(key)
  // };

  return (

    <div>
        <div onClick={toggleContent(key)} className='border border-solid border-[#ADADAD] rounded-[12px] hover:border-[#7f54f3] cursor-pointer md:p-[30px] p-[20px]'>
            <div className='flex justify-between items-start'>
                <h4 className='text-[22px] leading-[32px] font-medium text-black'>
                {question} 
                </h4>  
                <button className=" border border-solid border-[#7f54f3]  transition-all w-[40px] h-[40px] rounded-full p-1 text-xl"
                    >
                         {selected === key   ? '-' : '+'}
               </button> 
            </div>
           <p className={selected === key ? "transition-all text-[15px] leading-[22px] text-[#4A4D45] mt-[14px]" : "hidden"}> 
              {answer}
             </p>
        </div>
    </div>
    // <div className="mb-4">
    //   <div className="flex items-center justify-between">
    //     <h3 className="text-lg font-semibold">{question}</h3>
        // <button
        //   onClick={toggleContent}
        //   className="text-blue-500 focus:outline-none"
        // >
        //   {isOpen ? '-' : '+'}
        // </button>
    //   </div>
    //   {isOpen && <p className="mt-2">{answer}</p>}
    // </div>
  );
};

export default FAQItem;
