import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { IoIosEye, IoMdCart, IoMdCheckmark } from 'react-icons/io'
import { useAppContext } from '../Contexts/AppContext';



function EachProduct({product, filteredProducts}) {

  const { id, description, category, image, price, rating: { rate, count }, title} = product;
  
  const {  findItemInCart, cart, addTocart } = useAppContext();

  console.log(cart);

  return (
    <>

    <div 
    className=' '>
      <div 
      className='w-[160px] md:w-[200px] md:h-[290px] border-2 px-3 py-2 hover:shadow-xl duration-150 transtion flex items-center shadow-lg flex-col group'>
        <div
         className=' w-[140px] h-[180px] md:w-[160px] mb-2 md:h-[200px] overflow-hidden grid place-items-center'>
          <img 
          src={image} 
          alt={description}
          className=' object-contain mix-blend-color-burn w-[100px] h-[140px] md:w-[120px] md:h-[160px] group-hover:scale-110 transition' />
        </div>
        <div className='w-full grid justify-left text-[12px] uppercase font-Poppins text-gray-500'>{category}</div>
        <Link
        to={`/product/${btoa(id)}`}
        className=' cursor-pointer hover:underline transition text-left text-sm w-full leading-[1.1rem] line-clamp-2 text-[11px] font-semibold md:font-bold font-Poppins'>
          {product.title}
        </Link>
        <div className='flex w-full justify-center mt-2 items-center h-[30px]  shadow-md'>
          <button 
          onClick={()=>addTocart(product, id)}
          className='w-[80%] transition duration-150 h-full text-[11px] md:text-sm cursor-pointer font-Poppins tracking-wider flex gap-1 md:gap-2 bg-green-600 hover:text-green-600 hover:bg-white justify-center items-center text-white'>
            <div
            >{findItemInCart(id) ? 'Added': 'Add to Cart'}
            </div>
            <div>{findItemInCart(id) ? <IoMdCheckmark /> :<IoMdCart />}</div>
          </button>
          <Link
          to={`/product/${btoa(id)}`}
          className='  h-full grid place-items-center transition duration-150 cursor-pointer hover:bg-black/80 hover:text-white bg-gray-400/100   w-[20%]'><IoIosEye />
          </Link>
        </div>

      </div>
    </div>
    </>
  )
}

export default EachProduct;
