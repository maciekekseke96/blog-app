import { mainTitleActionTypes } from './mainTitle.action-types';

export const setMainTitle = (payload) => ({
  type: mainTitleActionTypes.SET_MAIN_TITLE,
  payload,
});
