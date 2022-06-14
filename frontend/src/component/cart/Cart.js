import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/CartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard.js";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Home/Header";
import CurrencyFormat from "react-currency-format";
import Footer from "../footer/Footer";

const Cart = ({ history }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let totalPrice = Price;

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return toast.error("Product Stock Limited");
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      <Header />
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div>
      ) : (
        <>
          <div className="cart__container" style={{ display: "flex" }}>
            <div className="cartPage">
              <div className="cartHeader">
                <p>Product</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>

              {cartItems &&
                cartItems.map((item) => (
                  <div className="cartContainer" key={item.product}>
                    <CartItemCard
                      item={item}
                      deleteCartItems={deleteCartItems}
                    />
                    <div className="cartInput">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.product, item.quantity)
                        }
                      >
                        -
                      </button>
                      <input type="number" readOnly value={item.quantity} />
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="cartSubtotal">{`Kshs. ${
                      item.price * item.quantity
                    }`}</p>
                  </div>
                ))}
            </div>
            <div className="cartGrossProfit">
              <div className="subtotal">
                {" "}
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({cartItems?.length} items):
                        <strong> {value} </strong>
                      </p>
                      <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contain a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={totalPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Kshs. "}
                />
                <p
                  onClick={checkoutHandler}
                  style={{
                    borderRadius: "3px",
                    padding: "0",
                    background: "#3bb77e",
                    height: "60px",
                    border: "none",
                  }}
                >
                  <p
                    id="view_btn"
                    className="btn btn-block"
                    style={{
                      padding: "20px 5px 0",
                      fontWeight: "400",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      alignItems: "center",
                      background: "none",
                    }}
                  >
                    Proceed To Checkout
                  </p>
                </p>
              </div>

              {/* <div></div>
              <div className="cartGrossProfitBox">
                <p>Price Total</p>
                <p>Kshs. {totalPrice}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div> */}
            </div>
          </div>
          {/* <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
          <BottomTab />
        </>
      )}
      <Footer />
    </>
  );
};

export default Cart;
