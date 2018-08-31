const { sumOfLastDigits } = require(`../allTasks`);

describe("Task 1", function() {

  it("Should return number", function() {
    expect(sumOfLastDigits(321432, 5)).toEqual(12);
  });

  it("If 'm' > count digits of 'n'", function() {
    expect(sumOfLastDigits(321, 5)).toEqual('Number "m" must be less or equal to quantity digins of number "n"');
  });

});
