// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.

// Ans:
// 1).The noDelayPrint() method is being defined twice with the same name, which means that the second definition will overwrite the first one.

// 2).The sheet number being printed is always the same (0) because this.index is not being correctly accessed inside the print function.

// To fix these issues, we can use arrow functions because in setTimeout we use arrow function.
// when noDelayPrint() or delayPrint() is called, it will correctly print the sheet number.

class Printer {
  constructor() {
    this.index = 0;
  }

  print = () => {
    console.log(`Printing sheet number ${this.index}`);
  };

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }

  delayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 1000); //1 sec delay
    this.index++;
  }
}
