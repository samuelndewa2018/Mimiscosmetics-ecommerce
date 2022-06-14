import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "./mobileNav.css";

const MobileNav = (props) => {
  const { cartItems } = useSelector((state) => state.cart);

  const anamateFrom = { opacity: 0, y: -40 };
  const anamateTo = { opacity: 1, y: 0 };

  return (
    <ul id="navbar1">
      <motion.li
        initial={anamateFrom}
        animate={anamateTo}
        transition={{ delay: 0.05 }}
      >
        <Link to="/" onClick={() => props.isMobile && props.closeMobile()}>
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={anamateFrom}
        animate={anamateTo}
        transition={{ delay: 0.1 }}
      >
        <Link
          to="/products"
          onClick={() => props.isMobile && props.closeMobile()}
        >
          Products
        </Link>
      </motion.li>
      <motion.li
        initial={anamateFrom}
        animate={anamateTo}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/signup"
          onClick={() => props.isMobile && props.closeMobile()}
        >
          SignUp
        </Link>
      </motion.li>
      <motion.li
        initial={anamateFrom}
        animate={anamateTo}
        transition={{ delay: 0.3 }}
      >
        <Link to="/about" onClick={() => props.isMobile && props.closeMobile()}>
          About
        </Link>
      </motion.li>
      <motion.li
        initial={anamateFrom}
        animate={anamateTo}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/contact"
          onClick={() => props.isMobile && props.closeMobile()}
        >
          Contact
        </Link>
      </motion.li>
      <motion.li
        initial={anamateFrom}
        animate={anamateTo}
        transition={{ delay: 0.5 }}
      >
        <Link to="/cart" onClick={() => props.isMobile && props.closeMobile()}>
          Cart (<span>{` ${cartItems?.length}`}</span> )
        </Link>
      </motion.li>
      <motion.li
        initial={anamateFrom}
        animate={anamateTo}
        transition={{ delay: 0.5 }}
      >
        <Link to="/cart">
          <i id="sp_cart" className="fa-solid fa-cart-plus"></i>
        </Link>
      </motion.li>
      <i
        onClick={() => props.isMobile && props.closeMobile()}
        id="close"
        className="fas fa-times"
      ></i>{" "}
    </ul>
  );
};

export default MobileNav;
