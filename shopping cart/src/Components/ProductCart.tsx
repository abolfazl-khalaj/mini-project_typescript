import React, { useContext } from 'react'
import { Product as ProductTypeProp } from '../types/Product.type'
import { CartContext } from '../context/Context'

function ProductCart({id,title,image,countCart,price}:ProductTypeProp) {

    const context = useContext(CartContext)

    const removeProductToCart = (idProduct:number) => {

        context.removeProduct(idProduct)

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
      <div className="product-count">
        <p>Count: {countCart}</p>
      </div>
      <button onClick={()=>removeProductToCart(id)}>Remove From Basket</button>
    </main>
  </div>
  )
}

export default ProductCart
