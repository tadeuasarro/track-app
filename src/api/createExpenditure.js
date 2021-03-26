const createExpenditure = async data => {
  const url = 'https://enigmatic-everglades-24941.herokuapp.com/expenditures';
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
  if (!result.id) {
    return ({
      error: result,
    });
  }
  return ({
    error: false,
    payload: result,
  });
};

export default createExpenditure;
