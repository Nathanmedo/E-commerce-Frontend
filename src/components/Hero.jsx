import React, { useLayoutEffect, useState, useEffect } from 'react'

function Hero() {
  const [ bgImg, setBgImg ] = useState("")

  useEffect(()=>{
      const heroImg = ['headphones.png', 'person image.png']
      const randomSelection = Math.floor(Math.random() * Number(heroImg.length));
      setBgImg(heroImg[randomSelection]);
  }, [bgImg])
  
  console.log(bgImg);
  return (
    <div 
    className=' bg-heroBgMain w-full overflow-hidden  h-[700px] bg-center bg-cover'>
      <div className='flex justify-between h-[100%] relative items-center w-full  px-10'>
        <div className='grid grid-cols-1 gap-2 md:w-[60%]'>
            <div className='uppercase text-shadow-md text-white items-center font-Arvo flex gap-2'>
                <hr className='w-[80px] h-[3px] white '/> 
            it's winter season</div>
            <div className='text-5xl leading-[3.5rem] md:leading-none font-semibold text-shadow-md text-white font-Poppins'>
                Big Gadgets and Phones sales
            </div>
            <div className='text-2xl font-Poppins text-shadow-lg capitalize text-white'>
                offering about <span className='text-green-500 text-3xl font-semibold'>60%</span> Discount !!
            </div>
        </div>
        <div className={`md:grid md:w-[40%] md:place-items-center  md:h-[100%]`}>
          <img src={`/src/assets/${bgImg}`} alt="Hero Image" className=' md:h-[100%] bgImg h-0 w-0 md:w-[100%] object-contain'/>
        </div>
      </div>

    </div>
  )
}

export default Hero
