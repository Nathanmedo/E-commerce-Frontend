import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Contexts/AppContext';
import { IoLogoXing } from 'react-icons/io';

function CartItems({ cartItem }) {

    const { id, image, description, price, title, quantity } = cartItem;

    const { increaseAmount, reduceAmount, removeFromCart } = useAppContext();


  return (
    <div>
        <div 
        
        className='w-full group py-2 relative flex items-center gap-3 px-4 border-b-2 border-gray-400 justify-between'>
            <button
            onClick={()=> removeFromCart(id)}
            className='p-2 absolute top-2 -right-2 transition duration-150 opacity-60 hover:opacity-100'
            ><IoLogoXing /></button>
            <Link
            to={`/product/${btoa(id)}`}
            className='w-[50px] h-[60px] grid place-items-center group-hover:scale-110 transition duration-200 overflow-hidden font-bold text-sm font-Poppins`'>
                <img src={image} alt={description} />
            </Link>
            <div className='grid w-full'>
                <Link 
                to={`/product/${btoa(id)}`}
                className=' font-bold text-sm w-[96%] mb-1 group-hover:underline transition duration-200 font-Poppins'>
                    {title}
                </Link>
                <div className='flex w-full items-center'>
                    <div className='h-8 w-[120px] font-bold font-Poppins text-sm cursor-pointer grid grid-cols-3 border-2 mr-3'>
                        <button 
                        onClick={()=> reduceAmount( cartItem, id)}
                        className='border-r-2  grid place-items-center'>-</button>
                        <button 
                        className='border-r-2 grid place-items-center'>{quantity}</button>
                        <button
                            onClick={()=> increaseAmount( cartItem, id)}
                        className='grid place-items-center'>+</button>
                    </div>
                    <div className='flex w-full justify-between'>
                        <div className=' text-gray-600 text-sm font-Poppins'>$ {price}</div>
                        <div className=' text-green-600 font-bold font-Arvo text-sm'>$ {(price * quantity).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
