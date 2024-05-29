import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch]  = useStateValue();
  return (
    <div className ="checkout">
      <div className = "checkout__left">
      <img div className ="checkout__ad" src ="" alt="" />
      </div>

      <div>
      <h2 className = "checkout__title">Your Shopping Basket</h2>    
     {basket.map(item => (
      <CheckoutProduct
      id={item.id}
      title={item.title}
      image= {item.image}
      price={item.price}
      rating={item.ratng}/>
     ))}
      </div>
      <div className = "checkout__right">
        <Subtotal />
      </div>
    </div>

    )
}

export default Checkout