import { postsActionTypes } from "./posts.action.types";

export const setPosts = (payload) => ({
    type: postsActionTypes.SET_POSTS,
    payload,
  });