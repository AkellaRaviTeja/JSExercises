// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export

/****Import*****/
//import allows us to import the class, functions, variables from other files and use them in the current file. Modules can be imported in two ways based on the type of export.
//The imported values are read-only views of the features that were exported. Similar to const variables, you cannot re-assign the variable that was imported, but you can still modify properties of object values. The value can only be re-assigned by the module exporting it.

/****export*****/
//export allows us to export the class, functions, variables to be used in other files. 
//There are two types of exports: Named Exports and Default Exports. Named Exports are used when we have multiple things to export from a file. Default Exports are used when we have only one thing to export from a file.

//you need to include type="module" in the <script> element, to declare this script as a module. You can only use import and export statements inside modules, not regular scripts. 