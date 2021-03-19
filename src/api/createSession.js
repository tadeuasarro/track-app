
const createSession = async user => {
  const url = `http://localhost:5000/users/${user}`;
  // const url = 'https://enigmatic-everglades-24941.herokuapp.com/users';
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(url, config);
  const result = await res.json();
  if (result === true) {
    return ({
      state: {
        pending: false,
        error: false,
      },
      payload: result,
    });
  }
  if (result === null) {
    return ({
      state: {
        pending: false,
        error: { login: ['User not found'] },
      },
    });
  }
  return ({
    state: {
      pending: false,
      error: { login: ["Can't be blank"] },
    },
  });
}

export default createSession;
