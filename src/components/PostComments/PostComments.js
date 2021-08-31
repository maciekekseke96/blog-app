import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getComments } from '../../axios';

import Comment from '../Comment/Comment';

import './PostComments.scss';

const PostComments = () => {
  let { id } = useParams();
  const [commentsToDisplay, setCommentsToDisplay] = useState([]);

  const setCommentsAsync = async (id) => {
    const comments = await getComments(id);
    setCommentsToDisplay(comments);
  };

  useEffect(() => {
    setCommentsAsync(id);
  }, []);
  return (
    <div className="post-comments">
      <p className="post-comments__header">Comments</p>
      <div className="post-comments__list">
        {commentsToDisplay.length > 0 &&
          commentsToDisplay.map(({ id, name, body }) => {
            return <Comment key={id} name={name} body={body} />;
          })}
      </div>
    </div>
  );
};

export default PostComments;
