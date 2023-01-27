// What does a call to the noDelayPrint() do.
/*
  Initially it prints "You asked me to print the sheet 0" to the console and then it prints "Printing Sheet Number undefined"
*/

// Is 'this' inside print function referrring to an instance of Printer
/*
  No, "this" doesn't reference to instance of Printer instead it reference to window object .
*/

// Is the correct sheet printed?
/*
  No
*/

//  Comment your understanding
/*
  The bind() method creates a new function, when invoked, has the "this" sets to the provided value.
*/
//  Provide a fix.

class Printer {
  constructor() {
    this.index = 0;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print.bind(this), 0); // 0 milli-sec delay
    this.index++;
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print.bind(this), 1000); //1 sec dely
    this.index++;
  }
}
