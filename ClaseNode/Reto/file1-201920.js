let fs = require("fs");

fs.readFile("file1-201920.js", (err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});

fs.writeFile("newFile.js", "datos", err=>{
    console.log("File created");
});





/*
let express = require("express");
let app = express();
app.get("/", (req, res)=>{
   res.send("Hola mundo");
});

app.listen(8080);

*/