function asynchFunction(f){
	setTimeout(f, 2000);
}

var color = "blue";

asynchFunction(function(){
	console.log("Orange is the new " + color);
});

color = "black";