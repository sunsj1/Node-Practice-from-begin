const fs=require("fs");

//folder created using Asynch
// fs.mkdir("files",(err)=>{
//     console.log("folder created");
// });

// //file cratation
// fs.writeFile("./files/bio.txt","India is my Conutry",()=>{
//     console.log("files created");
// });
// fs.appendFile('./files/bio.txt',"\nall inians are my brother and sister",(err)=>{
//     console.log("data appended at line 2");
// });
// fs.readFile("./files/bio.txt",'utf-8',(err,data)=>{
//     console.log(data);
// });

// fs.rename("./files/bio.txt","./files/MyBio.txt",(err)=>{
//     console.log("file renamed");
// });
fs.unlink("./files/MyBio.txt",(err)=>{
    console.log("folder deleted");
});
