// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export


/**
 * :: IMPORT/EXPORT ::
 * 
 * to use js import/export we need to make scripts as modules
 * for this we can either use package.json({type: module}) or a HTML file(include scripts and define type="module") to define the type as 'module'
 * we can export and import - functions, classes, constants etc...
 * Import & Export (using index.html)
 * we can do a _simple export_ lets say, 
 * -  export class ClassName {...} 
 * then we  can import it as 
 * -  import { ClassName } from '../fileDirectory'
 * 
 * for example, 
 * Utils.js
 *   export function fun1{...}
 *   export function fun2{...}
 * Diff.js
 *   import {fun1, fun2} from './Utils.js'
 * 
 * 
 * Or we can do default export like
 * - export default class ClassName {...}
 * - import ClassName from './path'
 * 
 * Import & Export (using package.json ES-6 modules)
 * module.export = { ...list }
 * require('../path') -> this will return so we need to save it in a var inorder to use it( const importName = require('../path')  )
 */