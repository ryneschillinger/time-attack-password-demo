var now = require("performance-now");

var results = measureDigits();
for (result in results) {
  console.log(result, results[result]);
}

function measureDigits() {
  var measurements = {};

  for (var n = 0; n < 100000; n++) {
    for (var i = 0; i < 10; i++) {
      var digit = i;
      var guess = "" + digit;

      var t0 = now();
      if (checkPassword(guess + "paaaad") || checkPassword(guess)) {
        console.log("correct!", guess);
      };
      var t1 = now();

      var dt = t1 - t0;
      if (measurements[digit] === undefined) {
        measurements[digit] = 0;
      }
      measurements[digit] += dt
    }
  }

  return measurements;
}

function checkPassword(guess) {
  var ACTUAL = "23632"
  for (var i = 0; i < guess.length || i < ACTUAL.length; i++) {
    if (ACTUAL[i] !== guess[i]) {
      return false;
    }
  }

  return true;
}
