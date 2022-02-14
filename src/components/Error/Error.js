import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div style={{ height: "100%", width: "auto" }}>
      <div className="gradient404"></div>
      <div className="content404">
        <p className="FourO" style={{ lineHeight: 1.2 }}>
          40<span className="Four">4</span>
        </p>
        <div className="message404">
          <p className="title">
            We are not able to fetch the page that you are looking for.
          </p>
          <p className="subtitle">You can try the below link</p>
        </div>
        <div className="button404">
          <Link to="/">
            <button
              className="btn btn-default redirect"
              style={{ minWidth: "189px" }}
            >
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
