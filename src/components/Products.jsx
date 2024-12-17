import React, { Fragment, useEffect, useState } from 'react'
import { useAppContext } from '../Contexts/AppContext'
import EachProduct from './EachProduct';
import { IoIosWarning } from 'react-icons/io';

function Products() {
    const { fetchError, products } = useAppContext();
    const [ header, setHeader ] = useState(null)

    const filteredProducts = [...products].filter(product => product.category === "men's clothing"
      || product.category === "women's clothing");


      function itemsCategories(Array, type1, type2){
        const category = Array.every(product =>{
          product.category == type1 || product.category == type2;
        })
        if(category){
          setHeader(`${type1} and ${type2}`) ;
        }
        if(!category){
          setHeader('Our Products');
        }
      }
    
      useEffect(()=>{
        itemsCategories(filteredProducts, "men's clothing", "women's clothing");
      }, []);


  return (
    <>
    {fetchError && 
    <p className='w-full text-center flex-col justify-center items-center flex text-red-700 h-[50vh] font-bold tracking-wider text-sm md:text-md uppercase gap-2'>
      <IoIosWarning className='text-xl'/>
      Error: {fetchError}
      </p>}
    { !fetchError &&
    <Fragment>
      <div className='mt-10'>
        <div className='font-semibold font-Poppins text-2xl capitalize text-gray-600 ml-4 md:ml:4 text-2xl md:text-md'>
          {header}
        </div>
        <div
        className='grid grid-cols-2 px-[8%] md:grid-col-3 lg:grid-cols-5 xl:grid-col-7 gap-4 place-items-center mx-auto my-4'>
          {[...filteredProducts].map( product => (

            <EachProduct key={product.id} product={product} filteredProducts={[...filteredProducts]} />
          
          ))}
        </div>
      </div>
    </Fragment> 
    }

    </>
  )
}

export default Products;
