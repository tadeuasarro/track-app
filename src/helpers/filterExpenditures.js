/* eslint-disable camelcase */
const filterExpenditures = expenditures => {
  let total = 0;
  let education = 0;
  let grocery = 0;
  let health = 0;
  let leisure = 0;
  let living = 0;
  let transport = 0;

  if (!expenditures) {
    return false;
  }

  expenditures.map(expenditure => {
    const { value, category } = expenditure;
    switch (category) {
      case 'Education':
        education += value;
        break;
      case 'Grocery':
        grocery += value;
        break;
      case 'Health':
        health += value;
        break;
      case 'Leisure':
        leisure += value;
        break;
      case 'Living':
        living += value;
        break;
      case 'Transport':
        transport += value;
        break;
      default:
        return true;
    }
    total += value;
    return true;
  });

  return {
    total,
    education,
    grocery,
    health,
    leisure,
    living,
    transport,
  };
};

export default filterExpenditures;
