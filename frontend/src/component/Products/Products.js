import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../Home/Header";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import ProductCard from "./ProductCard";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Pagination from "react-js-pagination";
import "./Product.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
// import { useAlert } from "react-alert";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";

const categories = [
  "Personal",
  "cloth",
  "Ladies Cloth",
  "Gift",
  "Food",
  "Electronics",
  "Sports",
  "Others",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category, alert, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={keyword ? `${keyword}'s results` : "Products"} />
          <Header />
          <div>
            {products.length === 0 ? (
              ""
            ) : (
              <h2
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid rgba(21,21,21,0.5)",
                  width: "20vmax",
                  fontSize: "1.4vmax",
                  fontFamily: "Poppins,sans-serif",
                  margin: "3vmax auto",
                  color: "rgb(0, 0, 0, 0.7)",
                }}
              >
                Featured Products
              </h2>
            )}
            <div
              className="sidebar__product"
              style={{
                display: "flex",
                flex: 1,
              }}
            >
              <div
                className="sidebar__products"
                style={{
                  border: "1px solid #999",
                  borderRadius: "15px",
                  margin: "1vmax",
                  flex: ".177",
                }}
              >
                <Typography
                  style={{
                    fontSize: "1.2vmax",
                    padding: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#3bb77e",
                  }}
                >
                  CHOOSE CATEGORIES
                </Typography>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                      type="checkbox"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                <Typography
                  style={{
                    fontSize: "1.2vmax",
                    padding: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#3bb77e",
                  }}
                >
                  QUICK LINKS
                </Typography>
                <Link to="/cart">
                  <li className="category-link">My Carts</li>
                </Link>{" "}
                <Link to="/favourites">
                  <li className="category-link">Favourites Items</li>
                </Link>
                <Link to="/cart">
                  <li className="category-link">Go to Checkout</li>
                </Link>{" "}
              </div>

              {products?.length === 0 ? (
                <>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      flex: ".9",
                      textAlign: "center",
                    }}
                    className="emptyProduct"
                  >
                    {/* <RemoveShoppingCartIcon /> */}
                    <Typography>
                      No Products found by name "{keyword}"
                    </Typography>

                    <p style={{ fontSize: "11px" }}>
                      * Search Keyword Only e.g Lips Gloss
                    </p>
                    <p style={{ fontSize: "11px" }}>
                      * Try searching with short and simple keywords.{" "}
                    </p>
                    <p style={{ fontSize: "11px" }}>
                      * Check your spelling for typing errors.
                    </p>
                    <p style={{ fontSize: "11px" }}>
                      * Try searching more general terms{" "}
                    </p>

                    <Link to="/products">View all Products</Link>
                    <BottomTab />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="products"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      flex: ".9",
                    }}
                  >
                    {products &&
                      products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}{" "}
                    <br />
                    {products &&
                      products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                </>
              )}
            </div>

            <div
              className="pagination__box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "6vmax",
              }}
            >
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Products;
