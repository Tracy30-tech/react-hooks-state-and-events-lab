import React, { useState } from "react";

function Item({ name, category }) {
  const[addToCart, setAddTooCart]= useState(false)

  const addCart = addToCart? "in-cart": ""

  return (
    <li className={addCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick ={()=> setAddTooCart(!addToCart)}>Add to Cart</button>
    </li>
  );
}

export default Item;
