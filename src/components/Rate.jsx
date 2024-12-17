import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import { Fragment } from 'react';

function Rate({rate, count}) {

  const stars = Array.from( {length: 5}, (_, index)=>{
    const integer = index + 1;
    return(
      <Fragment
      key={index}>
        {rate > integer ? <FaStar /> :
        rate > index + 0.5 ? <FaStarHalfAlt />:
        <AiOutlineStar className='text-[16px]'/>}
      </Fragment>
    )
  })

  console.log(rate, count);
  return (
    <div className='flex text-yellow-600 text-sm '>
      {stars}
    </div>
  )
}

export default Rate;
