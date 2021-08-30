import { combineReducers } from 'redux';
import postsReducer from './posts/posts.reducer';
import mainTitleReducer from './mainTitle/mainTitle.reducer';

const coreReducer = combineReducers({
  posts: postsReducer,
  mainTitle: mainTitleReducer,
});

export default coreReducer;
