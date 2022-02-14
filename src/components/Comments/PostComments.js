import React, { Component } from "react";
import Comment from "./Comment";
import { getComments } from "../../api/httpcalls";

class PostComments extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      postId: null
    };
  }

  updateComments = (commentData) => {
    this.setState({
      comments: [...this.state.comments, ...commentData],
      postId: this.props.postId
    });
  };

  componentDidMount() {
    getComments(this.props.postId, this.updateComments);
  }

  render() {
    if (this.state.postId == null) {
      return <h3>Loading Comments...</h3>;
    } else {
      return (
        <div>
          <h3 className="mb-4" align="center" style={{ color: "#DB3327" }}>
            Post No. {parseInt(this.state.postId) % 10} Comments
          </h3>
          {this.state.comments.map((comment) => {
            return (
              <Comment
                key={comment.commentId}
                name={comment.commentName}
                body={comment.commentBody}
                id={comment.id}
                PostId={this.state.postId}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default PostComments;
