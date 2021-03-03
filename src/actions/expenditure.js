export const INDEX_EXPENDITURES_PENDING = 'INDEX_EXPENDITURES_PENDING';
export const INDEX_EXPENDITURES_SUCCESS = 'INDEX_EXPENDITURES_SUCCESS';
export const INDEX_EXPENDITURES_ERROR = 'INDEX_EXPENDITURES_ERROR';

export const indexExpendituresPending = () => ({
  type: INDEX_EXPENDITURES_PENDING,
});

export const indexExpendituresSuccess = expenditures => ({
  type: INDEX_EXPENDITURES_SUCCESS,
  payload: expenditures,
});

export const indexExpendituresError = error => ({
  type: INDEX_EXPENDITURES_ERROR,
  payload: error,
});
