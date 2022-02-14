import React from "react";

const User = (props) => {
  let link = `/users/${props.id}`;

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.company}</td>
      <td>
        <a href={link}>Posts</a>
      </td>
    </tr>
  );
};

export default User;
