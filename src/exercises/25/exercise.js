// Read what is a closure and give an example here


// Closure is a function that has access to the parent scope, even after the parent function has closed. 
// The closure has access to the variables in three scopes: 
// 1. Variables for which there are no local variables
// 2. Variables declared as local variables in the parent function
// 3. Parameters of the parent function

// example
function parent() {
    let a = 1;
    function child() {
        console.log(a);
    }
    return child;
}

const closure = parent();
closure(); // 1

// The closure has access to the variable a, even after the parent function has closed.
// The closure has access to the variable a, because it is declared as a local variable in the parent function.

//or
const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();

add();
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.