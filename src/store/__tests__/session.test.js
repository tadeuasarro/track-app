import {
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_PENDING,
  CREATE_SESSION_ERROR,
  ERASE_SESSION,
  UPDATE_TARGET,
} from '../../actions/session';

import sessionReducer from '../sessionReducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { error: false, pending: false, user: false };
    const mockAction = { type: null };
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: false, pending: false, user: false });
  });

  it('resets the state to default', () => {
    const mockState = { error: false, pending: false, user: false };
    const mockAction = { type: ERASE_SESSION };
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: false, pending: false, user: false });
  });

  it('updates the user target', () => {
    const mockState = {
      error: false,
      pending: false,
      user: {
        username: 'Tadeu',
        target: 0,
        id: 1,
      },
    };
    const mockAction = { type: UPDATE_TARGET, payload: 3000 };
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: false,
      pending: false,
      user: {
        username: 'Tadeu',
        target: 3000,
        id: 1,
      },
    });
  });

  it('sets the state as pending true', () => {
    const mockState = { error: false, pending: false, user: false };
    const mockAction = { type: CREATE_SESSION_PENDING };
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: false, pending: true, user: false });
  });

  it('sets the state as an error has been returned', () => {
    const mockState = { error: false, pending: false, expenditures: false };
    const mockAction = { type: CREATE_SESSION_ERROR, payload: 'This is not working' };
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: 'This is not working',
      pending: false,
      expenditures: false,
    });
  });

  it('sets the state as it is indexing the expenditures is being detailed', () => {
    const mockState = { error: false, pending: false, results: false };
    const mockAction = {
      type: CREATE_SESSION_SUCCESS,
      payload: {
        username: 'Tadeu',
        target: 3000,
        id: 1,
      },
    };
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: false,
      pending: false,
      user: {
        username: 'Tadeu',
        target: 3000,
        id: 1,
      },
    });
  });
});
