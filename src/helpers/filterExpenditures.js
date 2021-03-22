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
    const { value, expense_id } = expenditure;
    switch (expense_id) {
      case 1:
        education += value;
        break;
      case 2:
        grocery += value;
        break;
      case 3:
        health += value;
        break;
      case 4:
        leisure += value;
        break;
      case 5:
        living += value;
        break;
      case 6:
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
