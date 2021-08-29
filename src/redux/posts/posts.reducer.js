import { postsActionTypes } from './posts.action.types';

const INITIAL_STATE = [];

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postsActionTypes.SET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
