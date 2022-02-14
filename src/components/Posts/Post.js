import React from "react";
import "./Post.css";

const post = (props) => {
  return (
    <div className="underlined underlined--reverse" onClick={props.clicked}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default post;
