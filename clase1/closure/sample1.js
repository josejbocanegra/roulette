function a() {
  let varInA = 10;
  return function b() {
    return (varInA = varInA + 1);
  };
}

const outsideA = a();
console.log(outsideA());
console.log(outsideA());
console.log(outsideA());
