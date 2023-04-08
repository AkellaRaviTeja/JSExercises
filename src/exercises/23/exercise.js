// What does a call to the noDelayPrint() do.
// "You asked me to print the sheet 0" "Printing sheet number undefined"
// When a function is used as a callback, this is lost. so we need to bind the function to the object.


// Is 'this' inside print function referrring to an instance of Printer
// Yes it is referring to an instance of Printer.


// Is the correct sheet printed?
// No, it is not printing the correct sheet.
// Index is incremented before the print function is called it is beacause the setTimeout function stays in the call stack until all the messages in the queue are processed.


//  Comment your understanding
//  Delay in setTimeout is not a delay in execution of the function. It is a delay in adding the function to the queue. So, the function is executed immediately after the current function is executed. So, the index is incremented before the print function is called. So, it is printing the wrong sheet number.


//  Provide a fix.
// We can fix this by binding the print function to the object. So, the print function will be called with the correct context.

class Printer {
  constructor() {
    this.index = 0;
    this.print = this.print.bind(this);
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  // print = () => { // Arrow function will also work
  //   console.log(`Printing sheet number ${this.index}`);
  // }
  // this in arrow function is lexically scoped. So, it will refer to the object in which the function is defined.

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }

  DelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 1000); //1 sec dely
    this.index++;
  }
}

//When we define two methods with same name then the second defined method overrides the first defined method.