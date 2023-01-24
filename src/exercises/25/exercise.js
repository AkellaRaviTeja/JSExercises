// Read what is a closure and give an example here

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.

function counter(){
    var count=0;
    function updateCounter(){
        return ++count;
    }
    return updateCounter;
}