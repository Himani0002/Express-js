// Exporting using CommonJS
const PI = 10;
const q = 10;

const sum = (a, b) => {
  console.log(a + b);
};

module.exports = { PI, q, sum };
