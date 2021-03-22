const indexExpenditures = async userId => {
  const url = `https://enigmatic-everglades-24941.herokuapp.com/expenditures?user_id=${userId}`;
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
};

export default indexExpenditures;
