const divideTenByNumber = require('./exercise.js');

test('divide ten by number', () => {
    expect(divideTenByNumber(5)).toEqual(2);
    expect(divideTenByNumber(0)).toEqual("Indeterminate");
});