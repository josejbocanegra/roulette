var express = require('express');
var app = express();

app.get("/", (req,res)=>{
	res.end("Raiz");
});

app.get("/estudiantes", (req,res)=>{
	res.end("Estudiantes");
});

app.get("/aulas", (req,res)=>{
	res.end("Aulas");
});

app.get("*", (req,res)=>{
	res.end("Not found");
});

app.listen(8000);


