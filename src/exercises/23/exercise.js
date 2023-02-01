// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.

// When we define two methods with same name then the second defined method overrides the first defined method.
// Here the second defined method with 1 millisecond delay is executed when we call the method noDelayPrint.

// Yes. 'this' inside the print function is referring to an instance of Printer.

// If we run this code as it is then the correct sheet is not printed.



class Printer {
  constructor() {
    this.index = 0;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }



  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 1000); //1 sec dely
    this.index++;
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(() => {
      this.print();
      this.index++;
    }, 0)// 0 milli-sec delay
  }
}

const printing = new Printer()
printing.noDelayPrint();

