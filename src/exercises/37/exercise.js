/*
Make this a node Project
Install jest
Write unit tests for all the exercises.
While writing test cases keep these in mind
1. Unit Test are not just for code coverage.
2. Do not write unit tests for the sake of writing. Cover the important and corner cases.
3. Maintaining should never be an added burden to the team.  
*/

const divideTenByNumber = require('../2/exercise');

test('Divides 10 with given number',()=>{
    expect(divideTenByNumber(0)).toBe("Indeterminate");
})