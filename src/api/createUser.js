const createExpenditure = async data => {
  const url = 'https://enigmatic-everglades-24941.herokuapp.com/users';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(url, config);
  const result = await res.json();
  if (result.id) {
    return ({
      state: {
        pending: false,
        error: false,
      },
      payload: result,
    });
  }
  return ({
    state: {
      pending: false,
      error: result,
    },
  });
};

export default createExpenditure;
