import { combineReducers, createStore } from 'redux';
import sessionReducer from './sessionReducer';

const store = createStore(
  combineReducers({
    session: sessionReducer,
  }),
);

export default store;
