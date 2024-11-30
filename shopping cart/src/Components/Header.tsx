import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";

function Header() {

  const context = useContext(CartContext)

  return (
    <header>
      <Link className="" to="/">
         shop
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>{context.userCart.length}</span>
      </Link>
    </header>
  );
}

export default Header;
