import "./Search.css";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import BottomTab from "../../more/BottomTab";

function Search({ history }) {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <>
      <form className="search_form" onSubmit={searchSubmitHandler}>
        <div className="searchbar">
          <input
            type="text"
            className="searchbar__input"
            placeholder="Search Products"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" className="searchbar__button">
            <SearchIcon />
          </button>
        </div>
      </form>
      <BottomTab />
    </>
  );
}
export default Search;
