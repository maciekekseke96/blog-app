import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPosts } from './redux/posts/posts.actions';
import { getPosts } from './axios';
import './App.scss';

const App = ({ setPosts }) => {
  useEffect(() => {
    setPostsAsync();
  }, []);

  const setPostsAsync = async () => {
    const postsList = await getPosts();
    setPosts(postsList);
  };
  return (
    <div className="aapp">
      <h1>Blog App</h1>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPosts: (data) => {
    dispatch(setPosts(data));
  },
});
export default connect(null, mapDispatchToProps)(App);
