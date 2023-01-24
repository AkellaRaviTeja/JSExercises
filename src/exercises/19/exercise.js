// Comment below what did you understand from the previous 3 exercises about
// - prototype
// - __proto__

// Prototype:
// The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.

// So, use prototype property of a function in the above example in order to have age properties across all the objects as shown below.

// function Student() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// Student.prototype.age = 15;



// __proto

// Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.

// function Student() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// var studObj = new Student();

// console.log(Student.prototype); // object
// console.log(studObj.prototype); // undefined
// console.log(studObj.__proto__); // object

// console.log(typeof Student.prototype); // object
// console.log(typeof studObj.__proto__); // object

// console.log(Student.prototype === studObj.__proto__ ); // true


// prototype comes into picture. 
// First of all, JavaScript engine checks whether toString() method is attached to studObj? (It is possible to attach a new function to a instance in JavaScript). 
// If it does not find there then it uses studObj's __proto__ link which points to the prototype object of Student function. 
// If it still cannot find it there then it goes up in the heirarchy and check prototype object of Object function because all the objects are derived from Object in JavaScript, and look for toString() method. 
//Thus, it finds toString() method in the prototype object of Object function and so we can call studObj.toString().