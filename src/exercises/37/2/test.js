const divideTenByNumber = require('./exercise2')

test(`Result after dividing 10`, () => {
   
   expect(divideTenByNumber(10)).toStrictEqual(1);
   expect(divideTenByNumber(0)).toStrictEqual("Indeterminate")
   expect(divideTenByNumber(-10)).toStrictEqual(-1);
   expect(divideTenByNumber(11)).toBeCloseTo(0.909);



})