import {Link} from 'react-router-dom'
import {BsArrowRightShort} from 'react-icons/bs'

const Dropdown = () => {
const productsArray = [
    {
        id: 1,
        image: "/dropdown-1.png",
        productName: "UIHUT",
        about: "Design Resources Platform",
        productLink: "https://uihut.com"
    },
    {
        id: 2,
        image: "/dropdown-2.png",
        productName: "Flowgiri",
        about: "Design Resources Platform",
        productLink: "https://flowgiri.com"
    },
    {
        id: 3,
        image: "/dropdown-3.png",
        productName: " Ezytor ",
        about: "Design Resources Platform",
        productLink: "https://ezytor.com"
    },
    {
        id: 4,
        image: "/dropdown-4.png",
        productName: "  Graphicsly  ",
        about: "Design Resources Platform",
        productLink: "https://graphicsly.net"
    },
]

  return (
    <div className="lg:w-[440px] p-[30px] rounded-[20px] bg-white shadow-lg">
        <p className="font-semibold text-[#292932]">
            Our Products
        </p>
        <ul>
            {productsArray.map(product => 
                <li className="mt-3" key={product.id}>
                    <Link to={product.productLink} target='_blank' >
                        <div className='flex justify-between items-center hover:bg-[#F3F3F6] transition-all ease-linear delay-200 p-[14px] rounded-md dropdown-list'>
                            <div className='flex items-center gap-x-3'>
                                <figure>
                                    <img src={product.image} alt="" />
                                </figure>
                                <div>
                                    <h6 className={`text-[22px] leading-[26px] font-bold text-[#292932]`}>
                                    {product.productName} 
                                    </h6>
                                    <p className='text-[14px] leading-[22px] text-[#8C8D8F] font-medium'>
                                    {product.about}
                                    </p>
                                </div>
                            </div>
                            <span className='text-4xl text-black   transition-all duration-300 ease-in-out right-arrow-span '>
                                {/* <BsArrowRightShort className='opacity-1 '/> */}
                                {/* */}
                                &rarr;
                            </span>
                        </div>
                    </Link>
            </li>
                )}
        </ul>
    </div>
  )
}

export default Dropdown