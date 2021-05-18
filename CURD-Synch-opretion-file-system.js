//1.create folder
//2.file create add data
//3.add more data
//4.read data without buffer data getting first
//5.rename file
//6.delete file and folder

// uncomment one by one
const fs=require('fs');

//fs.mkdirSync('files'); //create folder
//fs.writeFileSync('files/bio.txt','adding first line'); //file created at specific location
//fs.appendFileSync('files/bio.txt',' \n appended using append function');
//const data=fs.readFileSync('files/bio.txt',"utf8"); //reading with encoding
//console.log(data);
//fs.renameSync("files/bio.txt","files/mybio.txt");//rename file
//fs.unlinkSync("files/mybio.txt");//delete file
//fs.rmdirSync("files");//delete folder