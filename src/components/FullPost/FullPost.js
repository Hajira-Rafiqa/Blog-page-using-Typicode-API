import React, { Component } from "react";
import PostComments from "../Comments/PostComments";
import { deletePost, getPost } from "../../api/httpcalls";
import "./FullPost.css";

class FullPost extends Component {
  constructor() {
    super();

    this.state = {
      loadedPost: {},
      showComments: false,
      render: false
    };
    this.fetchPostCallback = this.fetchPostCallback.bind(this);
    this.changePage = this.changePage.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  fetchPostCallback(data) {
    this.setState({
      loadedPost: data
    });
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ render: true });
    }, 700);

    if (this.props.match.params.id) {
      getPost(this.props.match.params.id, this.fetchPostCallback);
    }
  };

  toggleComments = () => {
    this.setState({ showComments: !this.state.showComments });
  };

  changePage() {
    this.props.history.push(`/users/${this.props.match.params.user_id}`);
  }

  deletePost() {
    deletePost(this.props.match.params.id, this.changePage);
  }

  render() {
    let postId = this.props.match.params.id;
    let comments = null;
    let text = "Show Comments";
    if (this.state.showComments === true) {
      text = "Hide Comments";
      comments = <PostComments postId={postId} />;
    }

    if (this.state.render === false) {
      return <h3>Loading Post...</h3>;
    } else {
      return (
        <div>
          <div className="FullPost">
            <h1 className="mb-3 post-title">{this.state.loadedPost.title}</h1>
            <p className="mb-4" style={{ fontSize: "20px" }}>
              {this.state.loadedPost.body}
            </p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.deletePost}
            >
              Delete
            </button>
            &emsp;
            <button
              type="button"
              className="btn btn-success"
              onClick={this.toggleComments}
            >
              {text}
            </button>
          </div>
          <br />
          <br />
          {comments}
        </div>
      );
    }
  }
}

export default FullPost;
