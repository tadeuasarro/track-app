import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './sessionReducer';
import expenditureReducer from './expenditureReducer';

const store = createStore(
  combineReducers({
    session: sessionReducer,
    expenditure: expenditureReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
