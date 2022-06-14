import React, { useState } from "react";
import MetaData from "./Metadata";
import { useSelector } from "react-redux";
import "./Support.css";
import BottomTab from "./BottomTab.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../component/Home/Header";
import axios from "axios";
import Footer from "../component/footer/Footer";
import Loading from "./Loader";

const Support = ({ history }) => {
  const { loading } = useSelector((state) => state.profile);

  // receive email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [looading, setLooading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error("Please fill email, subject and message");
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Support" />
          <Header />

          <div
            className="support"
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px 0",
            }}
          >
            <h2
              className="support__heading"
              style={{
                textAlign: "center",
              }}
            >
              Hey How can we improve our services
            </h2>
            <h2
              className="support__heading"
              style={{
                textAlign: "center",
              }}
            >
              Report us for something...
            </h2>
            <div>
              <form
                style={{
                  width: "400px",
                  margin: "auto",
                  padding: "20px 0",
                  position: "relative",
                }}
                onSubmit={submitHandler}
              >
                <input
                  className="support__headingInput"
                  type="text"
                  required
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "1px solid #3BB77E",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                    height: "40px",
                  }}
                  name="user__name"
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Write your Name ...</span>

                <input
                  type="text"
                  required
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "1px solid #3BB77E",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                    height: "40px",
                  }}
                  name="user__subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
                <span>Write a Subject ...</span>

                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "1px solid #3BB77E",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                    height: "40px",
                  }}
                />
                <span>Write your Email...</span>

                <textarea
                  cols="30"
                  rows="5"
                  type="text"
                  required
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "1px solid #3BB77E",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                  }}
                  name="user__message"
                  onChange={(e) => setMessage(e.target.value)}
                >
                  {" "}
                </textarea>
                <span>write your message ...</span>

                <button
                  style={{
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    width: "100%",
                    background: "#3BB77E",
                    height: "40px",
                    margin: "10px 0",
                    color: "#fff",
                    fontSize: "1.2vmax",
                    borderRadius: "5px",
                    fontFamily: "Courier New, Courier, monospace",
                  }}
                >
                  {" "}
                  {looading ? "Sending..." : "Submit"}
                </button>
              </form>
              <div className="animation"></div>
            </div>
          </div>
          <Footer />
          <BottomTab />

          <ToastContainer position="top-center" limit={1} />
        </>
      )}
    </>
  );
};

export default Support;
