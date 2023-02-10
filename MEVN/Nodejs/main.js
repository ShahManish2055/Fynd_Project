const http=require('http');// importing the in built http module

var dt=require('./ownModule');//calling one module from another/user defined module

http.createServer(function(req,res){
    // res:response to a request(req)
    // response has 3 features:Head/Body and Tail
    // Head:code indication success or failure or any other status
    // 200:succcess code,formate:text/html,json,xml....
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("The date and time are currently:" + dt.getCurrentDate());
// datetime is being fetched from the outside module
// using the content type mentioned above as text/htmluser defined module
res.end();// ending the writing functionality for a request response function
}).listen(8800);// mentioning which port our application will run on the server 