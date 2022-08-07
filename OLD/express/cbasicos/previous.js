const http = require ("http");

http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);
    if(req.url == "/usuarios"){
    	//Add logic here
    } else if (req.url == "/cuentas"){
    	//Add logic here
    }
    res.write("<h1>Hola</h1>");
    res.end();
}).listen(8080);