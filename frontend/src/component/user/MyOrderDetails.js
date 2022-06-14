import Loading from "../../more/Loader";
import BottomTab from "../../more/BottomTab";
import Header from "../Home/Header";
import Footer from "../footer/Footer";
import MetaData from "../../more/Metadata";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/OrderAction";
import "./orderDetails.css";

const MyOrderDetails = ({ match, item }) => {
  const { order, error, loading } = useSelector(
    (state) => state.myOrderDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, error, match.params.id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order No. #{order && order._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.state}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  ></p>
                  <p
                    className={
                      order.paidStatus &&
                      order.paidStatus === "Payment Verified"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paidStatus &&
                    order.paidStatus === "Payment Verified" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        viewBox="0 0 14 14"
                        fill="currentColor"
                        width="20"
                        height="20"
                        role="img"
                        style={{
                          color: "#53C08E",
                          margin: "5px",
                        }}
                      >
                        <path d="M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                    {order.paidStatus && order.paidStatus}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>Ksh {order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.Offer}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.Offer}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ${item.price} ={" "}
                        <b>${item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
      <BottomTab />
    </>
  );
};

export default MyOrderDetails;
