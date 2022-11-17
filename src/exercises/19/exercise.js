// Comment below what did you understand from the previous 3 exercises about
// - prototype
// - __proto__

/**
 * for every class Prototype is a default entry we have
 * its like a blueprint of the object
 * and __proto__ gives the prototype of the prototype of object
 * we can add methods to prototype as follows
 * - Book.prototype.getDetails = function() { ... }
 * when we console.log any object of Book class it has prototype(even if the object is empty i.e {})
 * and we have this new getDetails function in Book.prototype
 * These have Object methods like constructor, hasOwnProperty etc... along with getter and setter.
 */
