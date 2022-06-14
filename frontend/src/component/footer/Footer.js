import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from "axios";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "./Footer.css";

function Footer() {
  // receive email
  const [email, setEmail] = useState("samuelndewa2018@gmail.com");
  const [name, setName] = useState("New User");
  const [subject, setSubject] = useState("Add me to News letter");
  const [message, setMessage] = useState("Request to be added to newsletter.");
  const [looading, setLooading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!message) {
      return toast.error("Please fill the email or phone number");
    }
    try {
      setLooading(true);
      const { data } = await axios.post(`api/v2/api/email`, {
        name,
        email,
        subject,
        message,
      });
      setLooading(false);
      toast.success(data.message);
    } catch (err) {
      setLooading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };
  return (
    <>
      <section className="section_p1" id="newsletter">
        <div className="newstext">
          <h4>Sign up for newsletter</h4>
          <p>
            Get email/WhatsApp texts updates about our latest shop and
            <span> special offers.</span>
          </p>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Your email or phone number"
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className="normali" onClick={submitHandler}>
            {looading ? "Sending..." : "Sign Up"}
          </p>
        </div>
      </section>
      <footer
        style={{
          paddingLeft: "20px",
        }}
        className="section_p1"
      >
        <div className="footer1st">
          <Link to="/">
            <img
              className="logo"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
              alt="companylogo"
            />
          </Link>
          <h4>Contact Us</h4>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-geo-alt icon__color"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <strong>Address: </strong> Nairobi, Kenya Kahawa Sukari, Baringo
            Raod
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-geo-alt icon__color"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <strong>Email:</strong>samuelndewa2018@gmail.com
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt icon__color"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
            </svg>
            <strong>Phone: </strong> +254712012113/+254791004783
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-geo-alt icon__color"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <strong>Hours: </strong> 10:00-18:00, Mon-Sat
          </p>
          <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
              <i>
                <FacebookIcon />
              </i>
              <i>
                {" "}
                <TwitterIcon />
              </i>
              <i>
                {" "}
                <InstagramIcon />
              </i>
              <i>
                {" "}
                <YouTubeIcon />
              </i>
              <i>
                {" "}
                <a href="https://wa.me/+254712012113"></a>
                <WhatsAppIcon />
              </i>
            </div>
          </div>
        </div>
        <div className="col " id="Exclude">
          <h4>About</h4>
          <Link to="/about">About Us </Link>
          <Link to="/order">Delivery Information </Link>
          <Link to="/faq">Privacy Policy </Link>
          <Link to="/faq">Terms & Conditions </Link>
          <Link to="/contact">Contact Us </Link>
        </div>
        <div className="col " id="Exclude">
          <h4>My Account</h4>
          <Link to="/login">Sign In </Link>
          <Link to="/password/forgot">Forgot Password</Link>
          <Link to="/cart">View Cart </Link>
          <Link to="/favourites">My Wishlist </Link>
          <Link to="/order">Track my Order</Link>
          <Link to="/contacts">Help </Link>
        </div>

        <div className="col " id="Exclude">
          <h4>Business</h4>
          <Link to="/creater">Become a Creater </Link>
          <Link to="/admin">Request admin</Link>
          <Link to="/faq">Seller Rules </Link>
          <Link to="/support">Report Us </Link>
          <Link to="/contact">Other Issues</Link>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="appstore.jpg" />
            <img src="img/pay/play.jpg" alt="playstore" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay/pay.png" alt="payment" />
        </div>
        <div className="copyright">
          <p>© 2022, Nest - Bramuels( +254712012113 / +254791004783 )</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
