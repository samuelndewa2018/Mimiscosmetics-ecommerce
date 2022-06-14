import React from "react";
import { Link } from "react-router-dom";
import "./CartItemCard.css";
import DeleteIcon from "@material-ui/icons/Delete";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link className="cart__title" to={`/product/${item.product}`}>
          {item.name}
        </Link>
        <span>{`Price: Kshs. ${item.price}`}</span>
        <span>Tax Included</span>
        <p onClick={() => deleteCartItems(item.product)}>
          <DeleteIcon />
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
