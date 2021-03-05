function createExpenditure(data) {
  const url = 'http://localhost:5000/expenditures';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };

  fetch(url, config)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      return ({
        pending: false,
        error: false,
      });
    })
    .catch(error => ({
      pending: false,
      error,
    }));
}

export default createExpenditure;
