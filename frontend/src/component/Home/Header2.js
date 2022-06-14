import { React, useState } from "react";
import { Link, Route } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useDispatch } from "react-redux";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import "./Header2.css";

function Header() {
  const dispatch = useDispatch();

  // menu toggle
  const [open, setOpen] = useState(false);
  const closeTab = () => setOpen(false);

  return (
    <>
      <section id="header">
        <Link to="/">
          <img src="/img/logo.png" className="logo" alt="the company logo" />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li class="services">
              <div className="user__account flex pointer">
                <Link to="/signup">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person pxz__20 black"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0
                    2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6
                    4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68
                    10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83
                    1.418-.832 1.664h10z"
                    />
                  </svg>{" "}
                </Link>
              </div>
            </li>
            <li>
              <div className="cart__items flex align__items__center">
                <div className="cart__items flex pointer relative">
                  <Link to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-cart3 pxz__20 black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </Link>
                  <div
                    className="heart__numbers"
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#95C730",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: "-40%",
                      right: "3.5%",
                    }}
                  >
                    <span>0</span>
                  </div>
                </div>
              </div>
            </li>
            <Link to="/">
              <i id="close" className="fas">
                <CloseIcon />
              </i>{" "}
            </Link>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart">
            <div className="cart__items flex align__items__center">
              <div className="cart__items flex pointer relative">
                <Link to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-cart3 pxz__20 black"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
                <div className="heart__numbers">
                  <span>0</span>
                </div>
              </div>
            </div>
          </Link>

          <i id="bar" onClick={() => setOpen(!open)} className="fas">
            {" "}
            <MenuOpenIcon />
          </i>
        </div>
        {open ? <MobileNav isMobile={true} closeMobile={closeTab} /> : ""}
      </section>
    </>
  );
}

export default Header;
