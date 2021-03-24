const createExpenditure = async data => {
  const url = 'http://localhost:5000/expenditures';
  // const url = 'https://enigmatic-everglades-24941.herokuapp.com/expenditures';
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
  if (result.expense_id || result.date || result.description || result.value) {
    return ({
      state: {
        pending: false,
        error: result,
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

export default createExpenditure;
