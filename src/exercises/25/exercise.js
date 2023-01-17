// Read what is a closure and give an example here

//Closure: Closure is a combination of function and its surrounding state.
const add = (num) => {
   const add5 = () => {
       console.log(num+5)
   }
   return add5
} 

let b=add(4)
console.log(b())

//In the above example, the  function "add" returns the definition of the function "add5".
//Here the concept of closures comes into picture, that the "add5" function is bundled with "num" value.
//So that we can access the num value outside the "add" function.