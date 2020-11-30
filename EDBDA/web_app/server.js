console.log("Welcome to server app");

//create logic for HTTP server creation
//Application js are self executable
//explicitly started , explicitly terminate
//servers are auto started and they are terminated when shut down machine

var http=require("http");
var url=require("url");
var fs=require("fs"); //call loads specified Node FS module into cache and assign that to an object named as fs.


// if I want to create a server
// 1.)you need to call function to create a server
// 2.)you need to call listen function of server
// 3.)you need to register another function while creatong server
// 4.)you need to write implementation of function onCreateserver to process request

var onCreateServer=function(request, response)
{
  var pathname  = url.parse(request.url).pathname;
   fs.readFile(pathname.substr(1), 
			function (err, data) {
       				if (err) 
				{
          			     console.log(err);
          			      response.writeHead(404, {'Content-Type': 'text/html'});  //error as an html output
       				}
				else
				{	
          			       response.writeHead(200, {'Content-Type': 'text/html'});	
          			       response.write(data.toString());		
       				}
       				response.end();
    });   
};
   

var server=http.createServer(onCreateServer); // register address of function which know how to process request
server.listen(7000);

console.log("Server is listening on port on http://localhost:7000/");