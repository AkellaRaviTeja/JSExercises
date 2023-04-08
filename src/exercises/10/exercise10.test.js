const findVoteEligibleCandidates = require('./exercise.js');

test('find vote eligible candidates', () => {
    const consolepass = jest.spyOn(console, 'log');
    findVoteEligibleCandidates([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
    expect(consolepass).toHaveBeenCalledWith(`${[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].filter((element) => element.age >= 18).map((element) => element.name)}`);
    findVoteEligibleCandidates([1, 12, 14]);
    expect(consolepass).toHaveBeenCalledWith(`${[1, 12, 14].filter((element) => element.age >= 18).map((element) => element.name)}`);
});