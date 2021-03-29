export const SET_LOADING = 'SET_LOADING';
export const SET_ERRORS = 'SET_ERRORS';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setErrors = target => ({
  type: SET_ERRORS,
  payload: target,
});
