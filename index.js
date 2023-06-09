function printNumber(i) {
  console.log(i);
}

function runLoopWithDelay() {
  for (let i = 1; i <= 1000; i++) {
    setTimeout(() => {
      printNumber(i);
    }, i * 1000);
  }
}

runLoopWithDelay();
