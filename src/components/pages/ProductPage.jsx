import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { createAppContext, useAppContext } from '../../Contexts/AppContext';
import Rate from '../Rate';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function ProductPage() {

  const { products, cart, increaseAmount, reduceAmount, addTocart } = useContext(createAppContext);
  const { id } = useParams();
  const [ sizeValue, setSizeValue ] = useState('meduim');
  console.log(id);
  
  const product = [...products].find( product => (btoa((product.id).toString())) === id.toString());
  console.log(product);
  
 
console.log(addTocart);
  console.log([...cart, product]);
  
  //check if the item is in the cart
  const cartItem = cart.find(item => btoa(item.id).toString() === btoa((product.id).toString()) && 
  item.title === product.title);

  console.log(cartItem);

  if (!product) {
        return <div>Product not found</div>;
    }

    const { description, image, price, rating: { rate, count }, title} = product;


    const sizeRange = [
      {size: 'small'},
      {size: 'meduim'},
      {size: 'large'},
      {size: 'extra-large'}
    ]
  return (
    <>
      { product ? ( 
        <div 
        className='w-full min-h-full flex justify-center items-center'>
          <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-2 w-[85%] mt-20 mb-10'>
            <div className='w-full grid place-items-center shadow-md border-2'>
              <img src={image} alt={description} className=' object-contain w-[80%] h-[80%]' />
            </div>
            <div className='mt-6 md:mt-0 md:ml-6'>
              <div className=''>
                <div className='uppercase font-bold font-Poppins text-2xl'>{title}</div>
                <div className='text-gray-700 text-sm lowercase'>From #{id}</div>
              </div>
              <div className='flex gap-2 items-center'>
                <Rate rate={rate} count={count} />
                <div className=' text-blue-700 flex gap-[4px]  text-sm font-Poppins'>
                  <div className='font-bold'>{rate}</div> Ratings
                </div>
                <div className='text-blue-700 flex gap-[4px] text-sm font-Poppins'>
                  <div className='font-bold'>{count}</div> Reviews
                </div>
              </div>
              <div className='mt-5'>
              <div className='text-green-800 font-bold tabular-nums font-Poppins text-2xl bg-gray-200 w-fit px-2 py-1'>${parseFloat(product.price).toFixed(2)}</div>
              </div>
              <div className='mt-2'>
                <div className=' capitalize flex gap-2 font-Poppins'>SIZE: 
                  <span className='font-bold'>{sizeValue}</span>
                </div>
                <div className='flex gap-5 items-center mt-3'>
                  <div className='flex gap-[4px]'>
                    {Array.from(sizeRange, ({size}, index)=>{
                      return(
                        <button
                        key={index} 
                        onClick={()=> setSizeValue(size)}
                        className={`w-[30px] border-gray-400 ${sizeValue == size && 'border-yellow-600 text-black font-bold'} border uppercase font-Poppins text-sm text-gray-600 h-[30px] grid place-items-center`}>
                          {size == 'small' ? 's': 
                          size == 'meduim' ? 'm':
                          size == 'large' ? 'l': 'xl'}
                        </button>
                      )
                    })}
                  </div>
                  <div className=' text-[13px] text-green-800 font-bold font-Poppins'>Size Chart</div>
                </div>
              </div>
              <div className='uppercase font-Poppins text-sm mt-5 tracking-wider flex gap-[4px]'>
                Avaliability: <span className='tracking-normal capitalize text-sm font-bold'>in stock</span>
              </div>
              <div className='md:mt-[50%]'>
                    <hr />
                    <div className='mt-[6px]'>
                      <div>
                        <div className='uppercase font-Poppins text-gray-600 text-[12px]'>Quantity</div>
                        <div className='mt-[8px] h-12 flex gap-2 flex-wrap-reverse justify-between items-center'>
                          <div className='flex '>
                            <div 
                            {...(!cartItem ? { disabled : true, style:{opacity: '0.5'} } : { disabled: false})}
                            className='w-[30px] h-[30px] text-sm font-bold border-gray-400 grid place-items-center border'>
                              {cartItem ? cartItem.quantity : '0'}
                            </div>
                            <div className='text-gray-600 w-[30px] border border-l-0 border-gray-400 box-border text-sm'>
                              <button 
                              onClick={()=>increaseAmount(product, product.id)}
                              className='grid place-items-center w-full'> 
                                <FaAngleUp /></button>
                              <button 
                              onClick={()=>reduceAmount(product, product.id)}
                              className=' grid w-full place-items-center border-gray-400 '> <FaAngleDown />
                              </button>
                            </div>
                          </div>
                          <button 
                          onClick={()=> addTocart(product, id)}
                          className='px-3 py-1 duration-150 bg-green-800 uppercase font-bold font-Poppins text-white hover:bg-green-600'>
                            {cartItem ? 'Added' : 'add to cart'}
                          </button>
                        </div>
                        
                      </div>
                    </div>
              </div>
            </div>
          </div>
          </div>
       ) : 

       (<p> this product does not exist!</p>)}
    </>
  )
}

export default ProductPage;
