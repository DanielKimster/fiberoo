function fib() {
  const fibNum = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibNum.push(fibNum[i - 1] + fibNum[i - 2]);
  }
  return fibNum;
}

console.log(fib());

function numsToStrings(arr) {
  return _.map(arr, (item) => `${item}`);
}
console.log(numsToStrings(fib()));
//This function takes an array of numbers, and returns a number indicating the number of even numbers (i.e. divisible by two) in the original list of numbers. Note that console.log(numEvenNums(fib())); should print out 17.
function numEvenNums (arr) {
  return _.filter(arr, (num) => num % 2 === 0).length;
}
console.log(numEvenNums(fib()));
