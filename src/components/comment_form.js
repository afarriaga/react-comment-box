/*jshint esversion: 6 */
import React from 'react';

let CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },

  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },

  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },

  render: function() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input className="form-input-text"
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input className="form-input-text"
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input className="form-input-submit"
          type="submit" value="Post" />
      </form>
    );
  }
});

export default CommentForm;
