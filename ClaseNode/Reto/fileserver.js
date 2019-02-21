let fs = require("fs");
let http = require("http");

http.createServer((req,res)=>{
    let file = fs.readFileSync("page1.html", "utf-8");
    file = file.replace("{{reemplazar}}", "<h2>Nuevo texto</h2>");
    fs.writeFileSync("page1.html", file);

    fs.readFile("page1.html", (err, data)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data.toString());
        return res.end();
    });
}).listen(8080);

