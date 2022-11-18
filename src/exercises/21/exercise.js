// What are the different levels of logs and how do we print them to the console?

/**
 * Different levels of logs are,
 * TRACE: trace gives full visibility of what is happening inside the application
 *  - console.trace('hey')
 * DEBUG: handles logging of information that needed to be diagnosed.
 *  - console.debug('hey')
 * INFO: it is just informative. it can be used to give information about the steps that passed smoothly may be in an algorithm.
 *  - console.info('hey')
 * WARN: used to warn about unexpected scenarios that may occurs without actually intrupting the controlflow of the program
 *  - console.warn('hey')
 * ERROR: used to give error messages that oocured
 *  - console.error('hey')
 * FATAL: it gives the critical information like operation fail which is required to move forward ( unable to connect server )
 *  - console.fatal('hey')
 * 
 * the one that is widely used is console.log() -> used to print info about anything that occurs in our program. can be used for all levels of logs.
 */



 console.trace("Hey!");
 console.debug("Hey!");
 console.info("Hey!");
 console.warn("Hey!");
 console.error("Hey!");
 console.fatal("Hey!");
 
 
 console.log("Hey!")
 