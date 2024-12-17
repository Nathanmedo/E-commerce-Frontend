import React, { useEffect, useMemo, useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import gsap from 'gsap';

export const createAppContext = createContext();


function AppContext({children}) {
    const [products, setProducts] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [ sideBar, setSideBar ] = useState(false);
    const [ cart, setCart ] = useState([])
    const [ total, setTotal ] = useState( 0 );


    useEffect(()=>{
    
        async function fetchProducts(){
            //creating an abort controller source
            const fetchController = new AbortController();

            //abort fetch signal 
            const abortFetchSignal = setTimeout(()=>{
                const reason = new DOMException('Request Timed Out', 'TimeOut Error')
                fetchController.abort(reason);
            }, 5000);

            try{
                let response = await fetch('https://fakestoreapi.com/products', 
                {
                    signal: fetchController.signal
                });
                if (!response.ok) throw Error('Fetch error!, Kindly check your network connection.');
                let data = await response.json();
                setProducts(data);
            }catch(err){
                setFetchError(err.message);
                console.log(err.message);
            } finally{
                clearTimeout(abortFetchSignal);
            }
            
        }

        fetchProducts();
    }, []);

    useEffect(()=>{
        
        const totalCheckout = [...cart].reduce((accumulator, item)=>{
                return(
                accumulator + (item.quantity * item.price)
                )
            }, 0);


        setTotal(totalCheckout)

    }, [cart])

    console.log(total);

    function findItemInCart( id ){
        const cartItem = cart.find( cartItem => cartItem.id == id);
        return cartItem;
    }


    function addTocart(product, id){
        const cartItem = findItemInCart( id );
        const newItem = {...product, quantity: 1}
        console.log(newItem);
        if (!cartItem){
            const newCartArray = [...cart, newItem];
            setCart(newCartArray);
        }else{
            return false;
        }
    }
    console.log(addTocart);

    function removeFromCart( id ){
        const newSetItems = cart.filter( cartItem => (cartItem.id).toString() !== id.toString());
        setCart(newSetItems);
    }

    function clearCart(element){
        gsap.to(element, {xPercent: -100, duration: 1, opacity: 0, stagger: .6})
        setCart([]);
    }

    function increaseAmount ( product, id ){
        const cartItem = findItemInCart( id );
        const { quantity } = cartItem

        if( cartItem ){
            const newQuantity = cart.map( cartItem => cartItem.id == id ? { ...cartItem, quantity: quantity + 1} : cartItem);
            console.log(newQuantity, 'added');
            setCart(newQuantity);
        }
    }

    function reduceAmount ( product, id ){
        const cartItem = findItemInCart( id );
        const { quantity } = cartItem;
        

        if( quantity >= 2){

            const newQuantity = cart.map( cartItem => cartItem.id == id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem);

            setCart(newQuantity);
        }else{
            removeFromCart(id)
        }
    }



  return (
    <createAppContext.Provider
    value={{
        products,
        total,
        setProducts,
        fetchError,
        cart, 
        setCart,
        sideBar,
        setSideBar, 
        findItemInCart,
        addTocart,
        removeFromCart,
        clearCart,
        increaseAmount, 
        reduceAmount
    }}
    >
        {children}
    </createAppContext.Provider>
  )
}

export const useAppContext = () => useContext(createAppContext);
export default AppContext;
