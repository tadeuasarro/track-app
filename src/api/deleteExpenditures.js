const deleteExpenditures = async id => {
  const url = `https://enigmatic-everglades-24941.herokuapp.com/expenditures/${id}`;
  const config = {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(url, config);
  const result = await res.json();
  if (result.errors) {
    return ({
      state: {
        pending: false,
        error: result.errors,
      },
    });
  }
  return ({
    state: {
      pending: false,
      error: false,
    },
    payload: result,
  });
};

export default deleteExpenditures;
