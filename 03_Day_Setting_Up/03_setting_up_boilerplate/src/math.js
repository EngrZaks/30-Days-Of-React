// math.js
const addTwo = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
function modulus(a, b) {
     return a % b;
}

export default (function doSomeMath() {
     return {
          addTwo,
          multiply,
          subtract,
          modulus,
     };
})();
