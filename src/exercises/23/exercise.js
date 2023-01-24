// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.



// this refers to the TIMEOUT function so I created an another function which binds to the object only 
// by using timeout It executes below line before this print even triggered so we get different values

class Printer {
  constructor() {
    this.index = 0;
    this.bindPrint = this.print.bind(this)
  }

  print() {
    // console.log(this)
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint1() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.bindPrint, 1000); //1 sec dely
    this.index++;
  }
}
const printer = new Printer()
printer.noDelayPrint()
printer.noDelayPrint()