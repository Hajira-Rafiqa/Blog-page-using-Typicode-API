import React, { Component } from "react";
import { getUsers } from "../../api/httpcalls";
import User from "./User";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  updateUsers = (users) => {
    this.setState({
      users: [...this.state.users, ...users]
    });
  };

  componentDidMount() {
    getUsers(this.updateUsers);
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">User No.</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
              <th scope="col">Blog Posts</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user) => (
              <User
                key={user.userId}
                name={user.userName}
                company={user.companyName}
                id={user.userId}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
