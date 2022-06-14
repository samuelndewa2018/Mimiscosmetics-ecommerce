import MetaData from "../../more/Metadata";
import CheckoutSteps from "./CheckoutSteps";
import Header from "../Home/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { CLEAR_CART } from "../../constans/CartConstans";
import { createOrder } from "../../actions/OrderAction";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./payment.css";
import "react-toastify/dist/ReactToastify.css";

const Payment = ({ history }) => {
  const dispatch = useDispatch();
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler2 = (e) => {
    e.preventDefault();
    if (subtotal === 0) {
      toast.error("Your cart is Empty");
    } else {
      dispatch(createOrder(order));
      dispatch({
        type: CLEAR_CART,
      });
      history.push("/success");
    }
  };
  // const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  // const stripe = useStripe();
  // const elements = useElements();
  // const payBtn = useRef(null);

  // const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);
  // const { error } = useSelector((state) => state.order);

  // const paymentData = {
  //   amount: Math.round(orderInfo.totalPrice * 100),
  // };

  // const order = {
  //   shippingInfo,
  //   orderItems: cartItems,
  //   itemsPrice: orderInfo.subtotal,
  //   shippingPrice: orderInfo.shippingCharges,
  //   totalPrice: orderInfo.totalPrice,
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   payBtn.current.disabled = true;

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "/api/v2/payment/process",
  //       paymentData,
  //       config
  //     );

  //     const client_secret = data.client_secret;

  //     if (!stripe || !elements) return;

  //     const result = await stripe.confirmCardPayment(client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardNumberElement),
  //         billing_details: {
  //           name: user.name,
  //           email: user.email,
  //           address: {
  //             line1: shippingInfo.address,
  //             city: shippingInfo.city,
  //             state: shippingInfo.state,
  //             country: shippingInfo.country,
  //           },
  //         },
  //       },
  //     });

  //     if (result.error) {
  //       payBtn.current.disabled = false;

  //       alert.error(result.error.message);
  //     } else {
  //       if (result.paymentIntent.status === "succeeded") {
  //         order.paymentInfo = {
  //           id: result.paymentIntent.id,
  //           status: result.paymentIntent.status,
  //         };

  //         dispatch(createOrder(order));

  //         history.push("/success");
  //       } else {
  //         toast.error("There's some issue while processing payment ");
  //       }
  //     }
  //   } catch (error) {
  //     payBtn.current.disabled = false;
  //     alert.error(error.response.data.message);
  //   }
  // };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  // }, [dispatch, error, alert]);

  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(false);

  let productPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const subtotal = productPrice;
  const shippingCharges = productPrice > 999 ? 0 : 50;
  const totalPrice = subtotal + shippingCharges;
  const phoneNo = shippingInfo.phoneNo;
  // ********************************
  const submitHandler = async (e) => {
    e.preventDefault();
    if (subtotal === 0) {
      toast.error("Your cart is Empty");
    } else {
      setProcessing(true);
      if (!shippingInfo.phoneNo) {
        return toast.error(
          "Your phone number is missing. Please go back and fill it"
        );
      }
      try {
        setLoading(true);
        const { data } = await axios.post(`api/v2/stk/push`, {
          phoneNo,
          totalPrice,
        });
        setLoading(false);
        // toast.success(data.message);
        toast.success("Payment is being processed");
        dispatch(createOrder(order));
        dispatch({
          type: CLEAR_CART,
        });
        history.replace("/success");
      } catch (err) {
        // payBtn.current.disabled = false;
        setLoading(false);
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        );
      }
    }
  };

  return (
    <>
      <MetaData title="Payment" />
      <Header />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" style={{ fontFamily: "Courier New" }}>
          <Typography>Payment Info</Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "spaceAround",
            }}
          >
            {/* <d className="flexCollumn">Name:</d>{" "} */}
            <d className="flexCollumn2">{` ${user.name}, as: "${user.email}"`}</d>
          </div>
          <div>
            <d className="flexCollumn">Mpesa No:</d>
            <d className="flexCollumn2">{phoneNo}</d>
          </div>
          <div>
            <d className="flexCollumn">Delivery To:</d>
            <d className="flexCollumn2">
              {`${shippingInfo.address}, ${shippingInfo.state}.`}
            </d>
          </div>
          <div>
            <d className="flexCollumn">Payment Totals:</d>
            <d className="flexCollumn2">{`Ksh. ${totalPrice}`}</d>
          </div>
          <div
            className="flexCollumn"
            style={{ fontFamily: "Poppins,sans-serif" }}
          >
            Pay Through:
          </div>
          <div style={{ display: "flex", flexDirection: "collumn" }}>
            {" "}
            <div style={{ flex: "0.5" }}>
              <input
                type="radio"
                name="mpesa"
                checked
                onClick={() => setIsChecked(true)}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/800px-M-PESA_LOGO-01.svg.png"
                alt="LipaNaMPESA"
                style={{
                  width: "72px",
                  height: "54px",
                  margin: "0 10px 10px 10px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div style={{ flex: "0.5" }}>
              <input
                type="radio"
                name="mpesa"
                onClick={() => setIsChecked(false)}
              />
              <d
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <LocalShippingIcon style={{ color: "#3bb77e" }} />
                On Delivey
              </d>
            </div>
          </div>

          {isChecked === true ? (
            <button
              style={{ borderRadius: "3px", outline: "none" }}
              onClick={submitHandler}
              className="paymentFormBtn"
              disabled={processing || disabled || succeeded}
            >
              {processing ? "Processing..." : `Pay Ksh ${totalPrice} via MPESA`}
            </button>
          ) : (
            <button
              type="submit"
              style={{ borderRadius: "3px", outline: "none" }}
              onClick={submitHandler2}
              className="paymentFormBtn"
            >
              Submit Order
            </button>
          )}
        </form>
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Payment;
