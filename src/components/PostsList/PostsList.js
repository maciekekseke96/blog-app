import React from 'react';

import { connect } from 'react-redux';

import Post from '../Post/Post';

import './PostsList.scss';

const PostsList = ({ posts }) => {
  return (
    <div className="posts-list-container">
      {posts.map(({ id, title, body }) => {
        return <Post key={id} id={id} title={title} body={body} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps, null)(PostsList);
