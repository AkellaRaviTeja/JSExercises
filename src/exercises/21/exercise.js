// What are the different levels of logs and how do we print them to the console?
let x = 1;
let y = 2;
let z = 3;
console.log({ x, y, z });
let user = {
  name: "Jesse",
  contact: {
    email: "codestackr@gmail.com",
  },
};
console.table(user);
// console.log(user);
// console.log({ user });
console.log("Console log");
console.info("Console info");
console.debug("console debug");
console.warn("console warn");
console.error("console error");

//optional logs
//the statement will be logged if the condiiton is false
let isWorking = false;
console.assert(isWorking, "App is not  working");
for (let i = 0; i < 10; i++) {
  console.count("Counter 1");
}
console.countReset("Counter 1");
//this is used to reset the counter
console.count("Counter 1");

console.time();
setTimeout(() => {
  console.timeEnd();
}, 5000);
setTimeout(() => {
  console.timeLog();
}, 2000);

console.groupCollapsed();
console.log("I am in a group");
console.log("I am also in a group");
console.groupEnd();
console.log(
  "%c This is yellow text on a blue background.",
  "color:yellow; background-color:blue"
);
//console.clear(); //clear the console

// function one() {
//   two();
// }
// function two() {
//   three();
// }
// function three() {
//   console.trace();
// }
// one();
