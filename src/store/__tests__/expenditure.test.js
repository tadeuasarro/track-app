import { SET_EXPENDITURES } from '../../actions/expenditure';

import expenditureReducer from '../expenditureReducer';

describe('Detail Reducer', () => {
  it('checks the default state is returned', () => {
    const mockState = { expenditures: false, summary: false };
    const mockAction = { type: null };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({ expenditures: false, summary: false });
  });

  it('sets the users expenditures into the state', () => {
    const mockState = { expenditures: false, summary: false };
    const mockAction = {
      type: SET_EXPENDITURES,
      payload: [
        { value: 1000, category: 'Education' },
        { value: 1000, category: 'Grocery' },
        { value: 1000, category: 'Health' },
        { value: 1000, category: 'Leisure' },
        { value: 1000, category: 'Living' },
        { value: 1000, category: 'Transport' },
      ],
    };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      expenditures: [
        { value: 1000, category: 'Education' },
        { value: 1000, category: 'Grocery' },
        { value: 1000, category: 'Health' },
        { value: 1000, category: 'Leisure' },
        { value: 1000, category: 'Living' },
        { value: 1000, category: 'Transport' },
      ],
      summary: {
        total: 6000,
        education: 1000,
        grocery: 1000,
        health: 1000,
        leisure: 1000,
        living: 1000,
        transport: 1000,
      },
    });
  });

  it('resets the expenditures to initial state', () => {
    const mockState = { expenditures: 'some mock information', summary: 'another mock information' };
    const mockAction = { type: SET_EXPENDITURES, payload: false };
    const state = expenditureReducer(mockState, mockAction);
    expect(state).toStrictEqual({ expenditures: false, summary: false });
  });
});
