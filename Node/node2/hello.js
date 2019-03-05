var f1 = function factorial (f) {
	return f == 0 ? 1: f * f1(f-1);
}

function algo (a,b){
	return a(b);
}

var x = algo(f1, 5);

console.log(x);
