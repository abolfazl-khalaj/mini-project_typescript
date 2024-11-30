import React, { useContext } from "react";
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import ProductCart from "../Components/ProductCart";
import { CartContext } from "../context/Context";


export default function Cart() {

  const context = useContext(CartContext)

  const clickRemoveAllProduct = () => {
    console.log('S');
    
    context.removeAllProduct()
  }


  return (
    <>
      {context.userCart.length ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button 
            onClick={clickRemoveAllProduct}>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {
              context.userCart.map(product => (

                <ProductCart key={product.id} {...product} />

              ))
            }

          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
