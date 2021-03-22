import { SET_CURRENT_USER, UPDATE_USER_TARGET } from '../../actions/session';

import sessionReducer from '../sessionReducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { username: false, target: false, id: false };
    const mockAction = { type: null };
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({ username: false, target: false, id: false });
  });

  it('sets the state with the user information', () => {
    const mockState = { username: false, target: false, id: false };
    const mockAction = { type: SET_CURRENT_USER, payload: { username: 'Tadeu', target: 0, id: 1 } }
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({ username: 'Tadeu', target: 0, id: 1 });
  });

  it('updates the users target in the state', () => {
    const mockState = { username: 'Tadeu', target: 0, id: 1 };
    const mockAction = { type: UPDATE_USER_TARGET, payload: 3000 }
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({ username: 'Tadeu', target: 3000, id: 1 });
  });

  it('resets the user to initial state', () => {
    const mockState = { username: 'Tadeu', target: 3000, id: 1 };
    const mockAction = { type: SET_CURRENT_USER, payload: { username: false, target: false, id: false } }
    const state = sessionReducer(mockState, mockAction);
    expect(state).toStrictEqual({ username: false, target: false, id: false });
  });
});
