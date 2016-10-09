/* jshint esversion: 6 */
import React from 'react';
import Remarkable from 'remarkable';

let Comment = React.createClass({
  raw_markup: function(){
    let md = new Remarkable();
    const raw = md.render(this.props.children.toString());
    return { __html: raw };
  },

  render: function() {
    return (
      <div className="comment">
        <h4 className="comment-author">
          {this.props.author}
        </h4>
        <p className="comment-body">
          <span dangerouslySetInnerHTML={this.raw_markup()} />
        </p>
      </div>
    );
  }
});

export default Comment;
