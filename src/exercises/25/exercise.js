// Read what is a closure and give an example here
// closure it is not explicitly implemented like arrays or objects
//closure has access to the variable environment of Execution context in which it is created
//closures happen internally

const applyLeaves = function () {
  leaves = 0;
  return function () {
    leaves++;
    console.log(`${leaves} leaves count`);
  };
};
const appliedLeaves = applyLeaves();
appliedLeaves();
appliedLeaves();
//we have call applyleaves then it will be sent into the call stack and be popped out
//then Execution context for appliedLeaves() will be created the varibale environment will be kept
//empty using concept of closure it will access o variable environment of its parent and
//it will return the values
