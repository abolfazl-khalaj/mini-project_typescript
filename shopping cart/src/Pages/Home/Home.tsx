import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Cart from "../Cart";
import Product from "../../Components/Product";
import { CartContext } from "../../context/Context";

function Home() {

  const context = useContext(CartContext)

  console.log(context.shop);
  


  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        {

          context.shop.slice(0,10).map(product => (

            <Product key={product.id} {...product}/>

          ))

        }
        
      </main>
    </>
  );
}

export default Home;
