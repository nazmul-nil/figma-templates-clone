
const HireUsModal = ({isVisible, onClose, children}) => {
    if(!isVisible) return null

    const handleClose = (e) => {
        if(e.target.id === "hire-us-modal-wrapper" ) onClose()
    }
  return (
    <div className="bg-black bg-opacity-50  backdrop-blur-md  fixed inset-0 flex justify-center items-center z-50" id="hire-us-modal-wrapper" onClick={handleClose}>
        <div className="w-[350px] md:w-[500px] lg:w-[896px]">
            
            <div className="bg-white rounded-[10px] flex  relative ">
                {children}
                <button className="border-none  cursor-pointer font-semibold text-lg absolute right-5 top-5" onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    </div>
  )
}

export default HireUsModal