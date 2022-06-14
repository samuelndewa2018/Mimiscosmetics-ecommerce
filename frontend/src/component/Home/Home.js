import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import Header2 from "./Header2";
import MetaData from "../../more/Metadata";
import Footer2 from "../footer/Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import bg from "../../Assets/background.jpg";
import bg2 from "../../Assets/background2.jpg";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Home" />
          <Header />
          {/* <Header2 /> */}
          {/* Carousel */}
          <div className="banner">
            {/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="item active">
                  <img
                    src="https://res.cloudinary.com/bramuels/image/upload/c_scale,h_715,w_1600/v1647109034/products/254706408261_status_f76baea1d70a45e09e67e6b5696e1768_xu1ktv.jpg"
                    alt="Los Angeles"
                  />
                </div>

                <div class="item">
                  <img
                    src="https://res.cloudinary.com/bramuels/image/upload/v1647107308/products/254706408261_status_d2eb2342cd574e428328c725d7d00c63_ohuque.jpg"
                    alt="Chicago"
                  />
                </div>

                <div class="item">
                  <img
                    src="https://res.cloudinary.com/bramuels/image/upload/c_scale,h_1000,w_1600/v1647109034/products/254706408261_status_f76baea1d70a45e09e67e6b5696e1768_xu1ktv.jpg"
                    alt="New York"
                  />
                </div>
              </div>

              <a
                class="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div> */}
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://res.cloudinary.com/bramuels/image/upload/c_scale,h_1000,w_1600/v1647109034/products/254706408261_status_f76baea1d70a45e09e67e6b5696e1768_xu1ktv.jpg"
                  alt="backgroundImage1"
                  className="bgImg"
                />
                {/* <img src={bg2} alt="backgroundImage2" className="bgImg" /> */}
              </Carousel.Item>
            </Carousel>

            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <h3 className="home__content2">
                  <span
                    style={{
                      fontFamily: "Segoe Script",
                      marginBottom: "5px",
                    }}
                  >
                    MimisCosmetics
                  </span>
                  <span>Fashionable Collections</span>
                </h3>
                <h2
                  style={{
                    fontFamily: "Segoe Script",
                    fontSize: "2em !important",
                    fontWeight: "500",
                  }}
                >
                  Buy 12 Get
                </h2>
                <span className="whiteSpanGift">1 Free</span>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "3.5em",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                  }}
                >
                  Fashionable
                </h2>

                <h2
                  style={{
                    fontSize: "3.5em",
                    fontWeight: "400",
                    fontFamily: "Montserrat,sans-serif",
                    color: "#fff",
                    lineHeight: ".7",
                  }}
                >
                  Collections
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "550",
                    fontFamily: "Montserrat,sans-serif",
                    fontSize: "1em !important",
                    paddingTop: "20px",
                    color: "#088178",
                  }}
                >
                  Get Free Delivery on all orders above Kshs. 999
                </h2>
              </div>
              <div>
                <a href="#container">
                  <p type="submit" className="Home__button">
                    SHOP NOW
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div id="container">
            <h2 className="homeHeading">Featured Products</h2>

            <div className="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
          <div id="container">
            <h2 className="homeHeading">What's New in Store</h2>
            <div className="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
          <div id="container">
            <h2 className="homeHeading">What's is in offer</h2>
            <div className="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
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
          <Footer2 />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
