const printOneToTen = require('./exercise.js');

test('print one to ten', () => {
  expect(printOneToTen()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});