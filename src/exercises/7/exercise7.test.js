const commaSeparatedString = require('./exercise.js');

test('comma separated string', () => {
    expect(commaSeparatedString(["John", "Doe", "Jane", "Doe"])).toEqual("John,Doe,Jane,Doe");
    expect(commaSeparatedString(["John", "Doe"])).toEqual("John,Doe");
    expect(commaSeparatedString(["John"])).toEqual("John");
});