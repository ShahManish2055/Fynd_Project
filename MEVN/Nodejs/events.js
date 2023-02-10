var fs=require('fs');
// import statement ,it import the filestream from the node modules
// fs=silestream is the builtin module
var rs=fs.createReadStream('./demofile.txt');
// var is the shortform for variable used to storee local values/temporary values
// reading the outside palces demotext file
// event =action performed on an object
// events work with event handler
rs.on('open',function(){
console.log('file is open');
});