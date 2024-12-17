import React, { useEffect, useState } from 'react'
import { IoIosCart } from 'react-icons/io'
import SideBar from './SideBar';
import { useAppContext } from '../Contexts/AppContext';
import { Link } from 'react-router-dom';


function Header() {

    const { SideBar, setSideBar, cart } = useAppContext();
    const [ navActive, setNavActive ] = useState(0);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        const scrollY = window.scrollY;
        console.log(scrollY);
        setNavActive(scrollY);
      })
    }, []);

  return (
      <header className={` flex transition duration-150 ${navActive > 60 ? 'bg-white shadow-lg h-14': 'backdrop-blur-lg' } z-[100] fixed top-0 w-full justify-between h-12 px-4 lg:px-10 xl:px-12 items-center shadow-md`}>
        <Link
        to='/' 
        className=' font-bold uppercase text-4xl font-Montserrat flex'>
            <div>p</div>
            <span className=' text-green-600'>eloco</span>
        </Link>
        <button className=' text-3xl cart'
        cartitemcount = {cart.length}
        onClick={()=>setSideBar(true)}>
            <IoIosCart />
        </button>
    </header>
  )
}

export default Header
