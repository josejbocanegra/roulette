function incrementInterval() {
  let interval = 10;
  return function () {
    interval = interval + 1;
    return interval;
  };
}

const firstInterval = incrementInterval();
console.log(firstInterval());
console.log(firstInterval());
console.log(firstInterval());

const secondInterval = incrementInterval();
console.log(secondInterval());
console.log(secondInterval());
console.log(secondInterval());
