const calculator = require("./calculate");
const middleFunctions = require("./middlewares");
const numbers = require("./numbers.json");

const app = middleFunctions();

const a = numbers.a;
const b = numbers.b;
console.log(`original values from Json :  ${a}, ${b}`);

app.use((next) => {
  let sqr1 = a ** 2;
  let sqr2 = b ** 2;
  console.log(`values to square: ${sqr1}, ${sqr2}`);
  console.log("squares sum: " + calculator.sum(sqr1, sqr2));
  next();
});

app.use((next) => {
  let trip1 = a ** 3;
  let trip2 = b ** 3;
  console.log(`values cubed: ${trip1}, ${trip2}`);
  console.log("cubes substraction: " + calculator.substract(trip1, trip2));
  next();
});

app.use((next) => {
  let div1 = a / 2;
  let div2 = b / 2;
  console.log(`values divided in 2: ${div1}, ${div2}`);
  console.log("half values multuplied: " + calculator.multiply(div1, div2));
  next();
});

app.get();
