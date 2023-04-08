const greeting = require('./exercise.js');

test('greeting', () => {
    const consolepass = jest.spyOn(console, 'log');
    greeting("John", "Doe");
    expect(consolepass).toHaveBeenCalledWith("Hello John Doe!");
});