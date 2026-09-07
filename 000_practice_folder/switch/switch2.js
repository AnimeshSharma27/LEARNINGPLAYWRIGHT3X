
function calculate(a,b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return "Invalid operator";
  }
}

console.log(calculate(5, 3, '+')); // 8
console.log(calculate(5, 3, '-')); // 2