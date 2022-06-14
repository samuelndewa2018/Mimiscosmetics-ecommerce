import React from "react";
import "./Loading.css";
import Header from "../component/Home/Header";

const Loading = () => {
  return (
    <>
      <Header />
      <div className="loading">
        Loading ...
        <input type="checkbox" id="check" />
        <label for="check">
          <div class="check-icon"></div>
        </label>
      </div>
    </>
  );
};

export default Loading;
