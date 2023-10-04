const fs = require("fs");

let textIn = fs.readFileSync('./File/input.txt','utf-8');
console.log(textIn);

let content = ` i m writing something from input file ie ${textIn}. \n\n Date : ${new Date()} `;
fs.writeFileSync('./File/output.txt', content);