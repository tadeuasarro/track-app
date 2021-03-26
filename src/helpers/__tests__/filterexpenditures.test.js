import filterExpenditures from '../filterExpenditures';

describe('Filter expenditures helper', () => {
  it('expects to returns everything as zero', () => {
    const result = filterExpenditures([]);
    expect(result).toStrictEqual({
      total: 0,
      education: 0,
      grocery: 0,
      health: 0,
      leisure: 0,
      living: 0,
      transport: 0,
    });
  });

  it('expects to return all of the values as 10 and total as 60', () => {
    const result = filterExpenditures([
      { value: 10, category: 'Education' },
      { value: 10, category: 'Grocery' },
      { value: 10, category: 'Health' },
      { value: 10, category: 'Leisure' },
      { value: 10, category: 'Living' },
      { value: 10, category: 'Transport' },
    ]);

    expect(result).toStrictEqual({
      total: 60,
      education: 10,
      grocery: 10,
      health: 10,
      leisure: 10,
      living: 10,
      transport: 10,
    });
  });
});
