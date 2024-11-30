import { createContext, useEffect, useState } from "react";
import React from "react";
import { Product } from "../types/Product.type";

type CartContextProviderProp = {
    children : React.ReactNode
}



type CartContextType = {
    userCart : Product[] ,
    addProduct : ( id : number )=> void ;
    removeProduct : ( id : number )=> void ;
    removeAllProduct : () => void ;
    shop : Product[]
}


export const CartContext = createContext({} as CartContextType)


const CartContextProvider = ({children}:CartContextProviderProp) => {

    const [userCart , setUserCart] = useState<Product[]>([])
    const [shop , setShop] = useState<Product[]>([])

    const addProduct = ( id : number ):void => {

        setUserCart(prev => {

            const productSelected = userCart.find(product => product.id === id) as Product

            if(productSelected){
                productSelected.countCart = productSelected.countCart + 1
                return [...prev]
            }else{
                const productNew = shop.find(product => product.id === id) as Product
                return [...prev , {...productNew , countCart:1} ]
            }
        })        
    }
    const removeProduct = ( id : number ):void => {

        setUserCart(prev =>prev.filter(product => product.id !== id))

    }
    const removeAllProduct = ( ):void => {
        setUserCart([])
    }



    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setShop(data) )
        
    },[])

    

    return (
        <CartContext.Provider value={{
            userCart,
            addProduct,
            removeProduct,
            removeAllProduct,
            shop,
        }}>
            {children}
        </CartContext.Provider>

    )
}



export default CartContextProvider


