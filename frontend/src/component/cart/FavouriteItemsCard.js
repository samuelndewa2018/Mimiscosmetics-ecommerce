import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavouriteItemsCard.css";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

const FavouriteItemsCard = ({ item, deleteFavouriteItems }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productDetails);

  return (
    <>
      <div className="FavouriteItemsCard">
        <div>
          <img src={item.image} alt="ssa" />

          <Link
            to={`/product/${item.product}`}
            style={{
              fontSize: "300 0.9vmax",
              fontFamily: "cursive",
            }}
          >
            {item.name}
          </Link>
          <p onClick={() => deleteFavouriteItems(item.product)}>
            {" "}
            <DeleteIcon />
            Remove
          </p>
        </div>

        <div>
          <span>{`Ksh ${item.price}`}</span>
        </div>
        <div>
          <Link to={`/product/${item.product}`}>
            <button
              className="favouritesButton"
              onClick={() => deleteFavouriteItems(item.product)}
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FavouriteItemsCard;
