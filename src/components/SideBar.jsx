import React, { Fragment, useState } from 'react'
import { IoIosCart, IoIosExit, IoMdExit } from 'react-icons/io'
import { useAppContext } from '../Contexts/AppContext'
import CartItems from './CartItems';
import { FaTrash } from 'react-icons/fa';

function SideBar({

}) {
    
    const { cart, clearCart, sideBar, setSideBar, total } = useAppContext();

    console.log(cart);
  return (
    <div className={`fixed bg-white z-[200] top-0 bottom-0 right-0 transition duration-200 ${sideBar ? 'translate-x-0' : 'translate-x-full'} w-full  md:w-[40vw] lg:w-[30vw]
    vw] px-5 pt-[45px] h-full shadow-lg border border-l-2`}>
        <button 
        className='bg-green-600 text-white rounded-sm absolute right-5 top-3'
        onClick={()=> setSideBar(false)}>
            <IoMdExit className=' m-2 text-2xl' />
        </button>
        <div className='flex font-bold uppercase tracking-wide items-center h-4 gap-2'>
            <div>Shopping Items</div>
            <div className='text-green-600'><IoIosCart /></div>
            <div className='text-green-600'>({cart.length})</div>
        </div>
        <div className=' font-Montserrat font-md text-gray-600 text-xm mt-1'>Thanks for shopping!</div>
        <hr className='w-full mt-1 bg-gray-800 h-[2px]'/>
        <div 
        className='h-[377px] overflow-y-auto scroll-smooth cart-scroll overflow-x-hidden mt-2'>
            <Fragment>
                {cart.length ? (cart.map((cartItem)=>(
                    <CartItems cartItem={cartItem} key={cartItem.id} />
                ))): (null)}
            </Fragment>
            {cart.length == 0 ? <p className=' w-full  font-bold mt-48 flex justify-center tracking-wider uppercase font-poppins text-gray-500'>No Items In the Cart!</p> : null}        
        </div>
        <div className='shadow-md  px-5 left-0 bottom-12 border h-[100px] right-0 fixed'>
            <div className='flex justify-between h-10 mt-2 box-border items-center'>
                <div className='flex uppercase text-sm'>
                    <div className='flex gap-1'>Total: 
                        <span className=' tabular-nums font-Poppins font-semibold'>${parseFloat(total).toFixed(2)}</span>
                </div>
                </div>
                <button 
                className='h-[30px] text-white bg-red-600 px-3 leading-[30px] overflow-hidden whitespace-nowrap'
                onClick={()=> clearCart('#cart-item')}>
                    <FaTrash />
                </button>
            </div>
            <div className='w-full text-center text-white font-Poppins mb-2 h-10 grid place-items-center bg-gray-500 hover:bg-gray-700 transition'>View cart</div>
            <div className='w-full text-center text-white font-Poppins h-10 grid place-items-center bg-green-500 hover:bg-green-700 transition'>Checkout Items</div>
        </div>
    </div>
  )
}

export default SideBar
