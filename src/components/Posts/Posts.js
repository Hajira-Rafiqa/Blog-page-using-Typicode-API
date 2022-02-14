import React, { Component } from "react";
import Post from "./Post";
import { getPosts } from "../../api/httpcalls";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      req: {
        userId: this.props.match.params.user_id,
        skip: 0,
        limit: 10
      },
      posts: [],
      userId: this.props.match.params.user_id
    };
  }

  clickedPost = (id) => {
    this.props.history.push(`/users/${this.props.match.params.user_id}/${id}`);
  };

  updatePosts = (userPosts) => {
    this.setState({
      posts: [...this.state.posts, ...userPosts]
    });
  };

  componentDidMount() {
    getPosts(this.state.req, this.updatePosts);
  }

  render() {
    if (this.state.userId == null) {
      return <h3>Loading Posts...</h3>;
    } else {
      return (
        <div>
          <h3 align="center" className="mb-4" style={{ color: "#DB3327" }}>
            User No. {this.state.userId} Posts
          </h3>
          {this.state.posts.map((post) => {
            return (
              <Post
                key={post.postId}
                title={post.postTitle}
                body={post.body}
                id={post.postId}
                userId={this.state.userId}
                clicked={() => this.clickedPost(post.postId)}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Posts;
