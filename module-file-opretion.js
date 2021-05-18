const fs=require("fs");
//file create with given name
fs.writeFileSync('read.txt',"welcome to file handling by node module");
//adding data in exiting file
fs.appendFileSync("read.txt"," appended new data using append");
//reading data from file
const buf_data=fs.readFileSync("read.txt"); //it give binary data
//console.log(buf_data);

const original_data=buf_data.toString();
console.log(original_data);

//to rename file
fs.renameSync('read.txt','read-write.txt');