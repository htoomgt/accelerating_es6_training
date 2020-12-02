// import {keyValue as key, test, myName} from './external.js';
// import a from './external.js'; // worked code line

import * as imported from './external.js';


console.log(imported.keyValue);
imported.test();
console.log(imported.keyValue);
console.log(imported.myName);
// console.log(a);