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
  const result = await res.json();
  if (result === null) {
    return ({
      state: {
        pending: false,
        error: { login: ['User not found'] },
      },
    });
  }
  if (result.username) {
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
      error: { login: ['Invalid username'] },
    },
  });
};

export default createSession;
