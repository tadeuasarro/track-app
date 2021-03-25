export const SET_LOADING = 'SET_LOADING';
export const SET_ERRORS = 'SET_ERRORS';

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

export const setErrors = target => ({
  type: SET_ERRORS,
  payload: target,
});
