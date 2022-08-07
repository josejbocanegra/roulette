let fs = require("fs");
let express = require("express");
/*
fs.readFile("index.js", (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
});
*/
function f(algo){
    fs.writeFile("newFile.html", "<html><head></head><body>Este es un archivo de prueba para node.js</body></html>", err=>{
        console.log("Archivo correctamente creado");
        fs.readFile("newFile.html",(err, data)=>{
            algo(data);
        });
    });
}

let app = express();

app.get("/", (req, res)=>{
    f((param)=>{
        //res.set('Content-Type', 'text/html');
        console.log(param.toString());
        res.send(param.toString());
    });
});

app.listen(8080);

