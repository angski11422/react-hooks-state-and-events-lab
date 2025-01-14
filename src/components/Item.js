import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const li = document.querySelectorAll('li');
  inCart ? (li.className = null) : (li.className = "in-cart");
  

  function addToCart() {
    setInCart((inCart) => !inCart);
    
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
