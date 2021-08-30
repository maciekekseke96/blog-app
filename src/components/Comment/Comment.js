import React from 'react';
import './Comment.scss';

const Comment = ({ name, body }) => {
  return (
    <div className="comment">
      <p className="comment__title">{name}</p>
      <p className="comment__body">{body}</p>
    </div>
  );
};

export default Comment;
