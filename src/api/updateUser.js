const createExpenditure = async (data, id) => {
  const url = `http://localhost:5000/users/${id}`;
  const config = {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(url, config);
  const result = await res.json();
  if (result === true) {
    return ({
      pending: false,
      error: false,
    });
  }
  return ({
    pending: false,
    error: result,
  });
};

export default createExpenditure;
