import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../Stateprovider";

function CheckoutProduct({ id, image, rating, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkout-product">
      <img className="cheakout-image" src={image}></img>

      <div className="checkout-info">
        <p className="checkout-title">{title}</p>
        <p className="cheackout-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
