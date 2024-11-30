import React, { useContext } from 'react'
import { Product as ProductTypeProp } from '../types/Product.type'
import { CartContext } from '../context/Context'

function Product({id,title,image,rating,price,countCart}:ProductTypeProp) {

  const context = useContext(CartContext)

  const clickProductToCart = (idProduct:number) => {
    
    context.addProduct(idProduct)
    alert('product add to cart')
  }


  return (
    <div className="card">
    <img
      src={image}
      alt=""
    />
    <main>
      <p>{title.slice(0,12)}</p>
      <div className="card-details">
        <p>{price}$</p>
      </div>
      <button onClick={() => clickProductToCart(id)}>Add to Basket</button>
    </main>
  </div>
  )
}

export default Product
