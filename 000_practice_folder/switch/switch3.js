

function signal(color) {
  switch (color) {
    case 'red': return "Stop";
    case 'yellow': return "Get ready";
    case 'green': return "Go";
    default: return "Invalid signal";
  }
}

console.log(signal('red')); // "Stop"
console.log(signal('yellow')); // "Get ready"
console.log(signal('green')); // "Go"
console.log(signal('blue')); // "Invalid signal"