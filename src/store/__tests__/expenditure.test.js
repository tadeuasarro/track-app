import {
  INDEX_EXPENDITURES_PENDING,
  INDEX_EXPENDITURES_SUCCESS,
  INDEX_EXPENDITURES_ERROR,
  ERASE_EXPENDITURE,
} from '../../actions/expenditure';

import expenditureReducer from '../expenditureReducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { error: null, pending: false, expenditures: false };
    const mockAction = { type: null };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: false, expenditures: false });
  });

  it('resets the state to default', () => {
    const mockState = { error: null, pending: false, expenditures: false };
    const mockAction = { type: ERASE_EXPENDITURE };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: null, pending: false, expenditures: false });
  });

  it('sets the state as pending true', () => {
    const mockState = { error: false, pending: false, expenditures: false };
    const mockAction = { type: INDEX_EXPENDITURES_PENDING };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({ error: false, pending: true, expenditures: false });
  });

  it('sets the state as an error has been returned', () => {
    const mockState = { error: false, pending: false, expenditures: false };
    const mockAction = { type: INDEX_EXPENDITURES_ERROR, payload: 'This is not working' };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: 'This is not working',
      pending: false,
      expenditures: false,
    });
  });

  it('sets the state as it is indexing the expenditures is being detailed', () => {
    const mockState = { error: false, pending: false, results: false };
    const mockAction = {
      type: INDEX_EXPENDITURES_SUCCESS,
      payload: [{
        value: 100,
        description: 'This is some string to describe something.',
        date: '2020/03/05',
        id: 1,
        user_id: 1,
        expense_id: 1,
      }],
    };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      error: false,
      pending: false,
      expenditures: [{
        value: 100,
        description: 'This is some string to describe something.',
        date: '2020/03/05',
        id: 1,
        user_id: 1,
        expense_id: 1,
      }],
    });
  });
});
