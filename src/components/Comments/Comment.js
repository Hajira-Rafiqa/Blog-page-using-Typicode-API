import React from "react";
import "./Comment.css";

const Comment = (props) => {
  return (
    <div className="comment user-comment">
      <div className="info">
        <p>{props.name}</p>
      </div>
      <p>{props.body}</p>
    </div>
  );
};

export default Comment;
