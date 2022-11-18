// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.

// noDelayPrint() increments the page-index and send it to print.
// no, this is not referring to an instance of Printer. instead it refers to TimeOut
// since index is not present in Timeout it prints undefined 
// 

class Printer {
  constructor() {
    this.index = 0;
  }

  print = () => {
    // console.log(this)
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }
  
  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(() => {
      this.print();
    }, 1000); //1 sec dely
    this.index++;
  }
}

let printer = new Printer()


printer.noDelayPrint();
printer.noDelayPrint();
printer.noDelayPrint();
printer.noDelayPrint();
printer.noDelayPrint();