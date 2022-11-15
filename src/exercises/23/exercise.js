// // Why does a call to the delayPrint() do.
// // - Comment your understanding
// // - Provide a fix.

// class Printer {
//   constructor() {
//     this.index = 0;
//   }

//   print() {
//     console.log(`Printing sheet number ${this.index}`);
//     this.index++;
//   }
//   delayPrint() {
//     console.log("print", this);
//     setTimeout(() => {
//       this.print();
//     }, 1000);
//     console.log(this.index);
//   }
// }

// const p2 = new Printer();
// p2.delayPrint();
// // p2.delayPrint();
// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.

//this is commenting to the printer object
//yes the current sheet is printed
//if there two functions with the same the one which comes second
//the code in second one will be executed
// we should the function inside the arrow function
//or else this will be binded to the global window
class Printer {
  constructor() {
    this.index = 0;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`1 You asked me to print the sheet ${this.index}`);
    setTimeout(() => {
      this.print();
    }, 0); // 0 milli-sec delay
    this.index++;
  }
  noDelayPrint() {
    console.log(`2  You asked me to print the sheet ${this.index}`);
    setTimeout(() => {
      this.print();
    }, 1000); //1 sec dely
    this.index++;
  }
}
const p = new Printer();
// console.log(p);
p.print();
p.noDelayPrint();
p.noDelayPrint();
p.noDelayPrint();
