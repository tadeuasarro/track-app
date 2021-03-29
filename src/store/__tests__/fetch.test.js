import { SET_LOADING, SET_ERRORS } from '../../actions/fetch';

import fetchReducer from '../fetchReducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { loading: false, errors: false };
    const mockAction = { type: null };
    const state = fetchReducer(mockState, mockAction);
    expect(state).toStrictEqual({ loading: false, errors: false });
  });

  it('sets the state with loading equal true', () => {
    const mockState = { loading: false, errors: false };
    const mockAction = { type: SET_LOADING };
    const state = fetchReducer(mockState, mockAction);
    expect(state).toStrictEqual({ loading: true, errors: false });
  });

  it('sets the state with the proper errors', () => {
    const mockState = { loading: true, error: false };
    const mockAction = { type: SET_ERRORS, payload: ['this is some error message'] };
    const state = fetchReducer(mockState, mockAction);
    expect(state).toStrictEqual({ loading: false, errors: ['this is some error message'] });
  });

  it('sets the state with no errors', () => {
    const mockState = { loading: true, error: false };
    const mockAction = { type: SET_ERRORS, payload: false };
    const state = fetchReducer(mockState, mockAction);
    expect(state).toStrictEqual({ loading: false, errors: false });
  });
});
