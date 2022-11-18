// Read what is a closure and give an example here

const Incrementor = function(incBy) {
    return function(val) {
        return incBy + val;
    }
}

const twoInc = Incrementor(2);
const fourInc = Incrementor(4);

console.log(twoInc(5));
console.log(fourInc(5))