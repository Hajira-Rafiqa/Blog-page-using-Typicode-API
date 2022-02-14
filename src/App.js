import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import Error from "./components/Error/Error";
import Users from "./components/Users/Users";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/users/:user_id" component={Posts} />
            <Route exact path="/users/:user_id/:id" component={FullPost} />
            <Route exact path="/pageNotFound" component={Error} />
            <Route exact path="/*" component={Error} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
