import React, { useState } from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./CheckoutSteps.css";
import { useSelector, useDispatch } from "react-redux";
import BottomTab from "../../more/BottomTab";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const CheckoutSteps = ({ activeStep }) => {
  const history = useHistory();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [phoneNo, setState] = useState(shippingInfo.state);
  const [address, setAddress] = useState(shippingInfo.address);
  const [country, setCountry] = useState(shippingInfo.country);

  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <LocalShippingIcon />,
      func: shipping,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <LibraryAddCheckIcon />,
      func: confirm,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalanceIcon />,
      func: payment,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  function shipping() {
    history.push("/shipping");
  }
  function confirm() {
    if (phoneNo && address) {
      history.push("/order/confirm");
    } else if (!country) {
      toast.error("First Fill Shipping Information");
    } else {
      toast.error("First Fill Shipping Information");
    }
  }
  function payment() {
    if (phoneNo && address) {
      history.push("/process/payment");
    } else {
      toast.error("First Fill Shipping Information");
    }
  }

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "#3BB77E" : "rgba(0, 0, 0, 0.649)",
                cursor: "pointer",
              }}
              icon={item.icon}
              onClick={item.func}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <BottomTab />
    </>
  );
};

export default CheckoutSteps;
