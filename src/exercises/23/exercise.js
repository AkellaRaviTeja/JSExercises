// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
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
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 1000); //1 sec dely
    this.index++;
  }
}

/*
Here there are two noDelayPrint() and the last function will overcome the above functions and 
start execution.

yes, 'this' inside print function referrring to an instance of Printer.
In JavaScript, the this keyword refers to an object.

In this class there are two methods with same name, i have observed that the last method is 
overridding the above method, and start execution.
*/
