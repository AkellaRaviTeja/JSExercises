// What are the different levels of logs and how do we print them to the console?

// console.log()
// console.log("Hello World!"); // Hello World!
// We can pass many log messages as arguments to the console.log() method.

// console.log("Hello World!", "How are you?"); // Hello World! How are you?
// We can also use the console.log() method to examing contents of an object.

// const Earth = {
//   name: "Earth",
//   age: "A Trillion Years",
// };

// // log object Earth
// console.log(Earth); // {name: "Earth", age: "A Trillion Years"}


// console.debug()
// We can also log information using the console.debug() method. 
//This is just like the console.log() method but instead, the information logged using this can be seen only if the console is in debugging level.


// console.dir()
// While you can also examine the contents of objects using the console.log() method, this is no different from the console.dir() method which can also be used to examine the contents of an object.
// But there is a slight difference to it.
// If you are trying to view the contents of an HTML element using the console.log() method, you would see the content int he console just like how it is represented in plain HTML, not useful if you are trying to view the attributes and all other cool kinds of stuff.


// console.error()
// If you want to log an error instead of some information you can use the console.error() method.
// error
// console.error("This is a big error 🚫");
// The error will be in red color and will also show the line number where the error has happened.


// console.warn()
// if you want to log a warning instead of a pure error, you can use the console.warn() method.
// warning
// console.warn("This is just a warning ⚠️");


// console.table()
// If you want to view your contents of objects in a table-like structure, you can use the console.table() method.
