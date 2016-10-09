/*jshint esversion: 6 */
import React from 'react';
import Comment from './comment';

let CommentList = React.createClass({
  render: function() {
    let comment_nodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="comment-list">
        {comment_nodes.reverse()}
      </div>
    );
  }
});

export default CommentList;
