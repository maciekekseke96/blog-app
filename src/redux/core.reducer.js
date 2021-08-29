import { combineReducers } from 'redux';
import postsReducer from './posts/posts.reducer';

const coreReducer = combineReducers({
  posts: postsReducer,
});

export default coreReducer;
