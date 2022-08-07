let fs = require("fs");
let axios = require("axios");
let http = require("http");

let url = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/67eb74de1851e0dbace1ed0d749b6f01ac7d2d46/productos.json";

axios.get(url).then(response=>{
    return response.data;
}).then((response)=>{
    for(let rs of response){
        console.log(rs.nombreProducto);
        fs.appendFile("response.json", rs.nombreProducto + "\n", (er)=>{
           // console.log("archivo creado");
        });
    }
    http.createServer((req,res)=>{
        fs.readFile("response.json", (err, data)=>{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
        });
    }).listen(8080);

    /*
    fs.appendFile("response.json", jso, (er)=>{
        console.log("archivo creado");
    });
    */
});
/*
http.createServer((req,res)=>{
    fs.readFile("page1.html", (err, data)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);*/

/*
fs.readFile("app.js", (er, data)=>{
    console.log(data.toString());
});

fs.appendFile("prueba.txt2", "dato", (er)=>{
    console.log("archivo creado");
});*/