// What are the different levels of logs and how do we print them to the console?

/*JavaScript has support for logging messages at various levels. They are as follows, with their associated method and a description of their output in the console:

Plaintext—console.log() outputs unstyled text.
Info—console.info() typically outputs text with a blue background.
Warn—console.warn() typically outputs text with a yellow background.
Error—console.error() typically outputs text with a red background.
*/

console.log("Hello World");
console.dir("Hello World"); //outputs unstyled text.

console.error("error"); //typically outputs text with a red background.

console.warn("warning"); //typically outputs text with a yellow background.

console.info("information"); //display the information
