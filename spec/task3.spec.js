const { mersenneNumbers } = require(`../allTasks`);

describe("Task 3", function() {

  it("Should return array", function() {
    expect(mersenneNumbers(15)).toEqual([1, 3, 7]);
  });

});
