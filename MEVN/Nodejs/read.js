const fs=require("fs");
// const { describe } = require("node:test");
/** 
* @desc
* Takes filepath and logs the contents
* @params
*filepath string
*
*/

function readUTF(filePath){
    // callback :choice derermining
    // 2 choices:data=success
    // error=failure
    // it is use to minimize the exception like as handelling of exception
    fs.readFile(filePath,"utf-8",(data,error)=>{
        
        if(error){
            console.error(error);
            return;
        }
        console.log(data)
    });

}

// fs.writeFile(filePath,"UTF-8",(data,error)=>{
//     if(error){
//         console.error(error);
//         return;
//     }
//     console.log(data);
// });

// Non existing file
// readUTF("./abcd.txt");

// Existing file
readUTF("./demofile.txt");