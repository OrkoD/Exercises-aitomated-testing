const { getAll } = require(`../allTasks`);

describe("Task 1", function() {

  it("Should return number", function() {
    expect(getAll(5, 50)).toEqual([50, 100, 150, 200, 250]);
  });

});
