import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Route, Switch, withRouter } from 'react-router-dom';

import { setPosts } from './redux/posts/posts.actions';
import { getPosts } from './axios';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import PostDetails from './pages/PostDetails/PostDetails';

import './App.scss';

const App = withRouter(({ setPosts, history }) => {
  useEffect(() => {
    setPostsAsync();
    history.push('/posts');
  }, []);

  const setPostsAsync = async () => {
    const postsList = await getPosts();
    setPosts(postsList);
  };
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/posts" component={MainPage} />
        <Route path="/posts/:id" component={PostDetails} />
      </Switch>
    </div>
  );
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (data) => {
    dispatch(setPosts(data));
  },
});
export default connect(null, mapDispatchToProps)(App);
