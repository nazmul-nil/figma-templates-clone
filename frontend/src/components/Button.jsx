
const Button = ({styles, children, onClick}) => {
    const defaultStyles = "cursor-pointer leading-5 md:leading-7 border-none bg-[#7F54F3] text-white font-medium text-[11px] md:text-[16px] py-2 px-3 md:px-6 rounded-[29px]"
    const combinedStyles = `${defaultStyles} ${styles}`
  return (
    <button className={combinedStyles} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button