import { mainTitleActionTypes } from './mainTitle.action-types';

const INITIAL_STATE = ''

const mainTitleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mainTitleActionTypes.SET_MAIN_TITLE:
      return action.payload;
    default:
      return state;
  }
};

export default mainTitleReducer;
