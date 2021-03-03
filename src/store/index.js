import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './sessionReducer';

const store = createStore(
  combineReducers({
    session: sessionReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
