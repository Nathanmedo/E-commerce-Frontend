import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import Products from './Products';
import { useAppContext } from '../Contexts/AppContext';
import Hero from './Hero';




function Home({ filteredProducts }) {

console.log(filteredProducts);
  return (
    <>
      <Hero />
      <Products  filteredProducts={filteredProducts}/>
    </>
  )
}

export default Home;
