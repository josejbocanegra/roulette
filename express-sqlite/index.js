var express = require('express');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('neptuno');

db.each(`SELECT * FROM proveedores`, function(err, row) {

	// Si ocurre algún error durante la consulta, retorna un error con código 500
	if (err) {
		console.log("error");
	}

	console.log(row);

}).close();