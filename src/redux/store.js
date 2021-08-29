import { createStore } from 'redux';
import coreReducer from './core.reducer';

const store = createStore(
  coreReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
