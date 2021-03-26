const createSession = async user => {
  const url = `https://enigmatic-everglades-24941.herokuapp.com/users/${user}`;
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(url, config);
  if (res.status === 404) {
    return ({
      error: { login: ['Invalid username'] },
    });
  }
  const result = await res.json();
  return ({
    error: false,
    payload: result,
  });
};

export default createSession;
