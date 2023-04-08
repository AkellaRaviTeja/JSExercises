// Comment below what did you understand from the previous 3 exercises about
// - prototype
// - __proto__

/*********Prototype*******/
//  prototype: The prototype property is used to add methods or properties to an object's prototype. The prototype is a shared property of all instances of an object created using the constructor function, and adding a method or property to it will make it available to all instances of that object. It can be used to add methods and properties to an object after it has been created.
/*                              // A constructor function
                                function Box(value) {
                                  this.value = value;
                                }

                                // Properties all boxes created from the Box() constructor
                                // will have
                                Box.prototype.getValue = function () {
                                  return this.value;
                                };

                                const boxes = [new Box(1), new Box(2), new Box(3)];
//Box.prototype it's just a plain object. Every instance created from a constructor function will automatically have the constructor's prototype property as its [[Prototype]] — that is, Object.getPrototypeOf(new Box()) === Box.prototype. Constructor.prototype by default has one own property: constructor, which references the constructor function itself — that is, Box.prototype.constructor === Box. This allows one to access the original constructor from any instance.
*/


/*********__proto__*******/
// __proto__: The __proto__ property is an internal property of an object that points to its prototype. It is used to access the prototype of an object, and can also be used to set the prototype of an object. When a property is accessed on an object, JavaScript first looks for the property on the object itself, and if it is not found, it looks for it in the object's prototype, and so on up the prototype chain until the property is found or the end of the prototype chain is reached.
/*                           const o = {
                                a: 1,
                                b: 2,
                                // __proto__ sets the [[Prototype]]. It's specified here
                                // as another object literal.
                                __proto__: {
                                  b: 3,
                                  c: 4,
                                  __proto__: {
                                    d: 5,
                                  },
                                },
                              };
                              
                              // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
                              
                              console.log(o.d); // 5
*/