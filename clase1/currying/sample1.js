//const mcd = (a, b) => (a === b ? a : mcd(Math.min(a, b), Math.abs(a - b)));

const mcd = (a) => (b) => a === b ? a : mcd(Math.min(a, b), Math.abs(a - b));
console.log("MCD", mcd(10)(5)()());
