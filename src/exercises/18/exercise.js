// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export

import { SickLeave, CasualLeave } from "../17/exercise";
const ob1 = new SickLeave("Sai", "Ram", 21, "m");
ob1.show();

/*
about import :
The import keyword allows you to import a JavaScript module. Importing a module allows you 
to pull any items from that module into the current code file. When we import a module, we 
 start the expression with the import keyword. Then, we identify what parts of the module we are 
going to import. Then, we follow that with the "from" keyword, and finally we finish with the path 
to the module file. The from keyword and file path tell the interpreter where to find the module we are importing.
Syntax:
    import { export_function,varibles } from "file_path"
    //when we using name exports
    import export_function,varible from "./file_path";
    //when we using defaule exports

about export:
The export keyword make the selected items in the module avaliable to other other module.
there different types of export types:
  //name export
  export { ItemName1,ItemName2.. };
  export let name1, name2..;
  //deafult export
  export default name1;
  export default class Class_name;
*/