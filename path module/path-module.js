const path =require('path');
// console.log(path.dirname('G:/Suraj DevWork\NodeDev\path module\path-module.js')); // to know dir name
// console.log(path.extname('G:/Suraj DevWork\NodeDev\path module\path-module.js')); //extension
// console.log(path.basename('G:/Suraj DevWork\NodeDev\path module\path-module.js'));//file name
const Mypath=path.parse('G:/Suraj DevWork\NodeDev\path module\path-module.js');
console.log(Mypath.name);