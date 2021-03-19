const indexExpenditures = async userId => {
  const url = `http://localhost:5000/expenditures?user_id=${userId}`;
  // const url = 'https://enigmatic-everglades-24941.herokuapp.com/expenditures?user_id=';
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(url, config);
  const result = await res.json();
  return result;
}

export default indexExpenditures;
