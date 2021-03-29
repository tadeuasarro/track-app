import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './sessionReducer';
import expenditureReducer from './expenditureReducer';
import fetchReducer from './fetchReducer';

const store = createStore(
  combineReducers({
    session: sessionReducer,
    expenditure: expenditureReducer,
    fetch: fetchReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
