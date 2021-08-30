import React from 'react';

import CustomButton from '../CustomButton/CustomButton';
import './Post.scss';

const Post = ({ id, title, body, withButton }) => {
  return (
    <div className="post-item">
      <p className="post-item__title">{title}</p>
      <p className="post-item__body">{body}</p>
      {withButton && (
        <CustomButton
          id={id}
          className={'full-version-button'}
          content="Full Version"
        ></CustomButton>
      )}
    </div>
  );
};

export default Post;
