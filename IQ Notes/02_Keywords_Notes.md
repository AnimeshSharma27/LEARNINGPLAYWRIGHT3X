# JavaScript Keywords

## What is a Keyword?

A **keyword** is a word that is **reserved by the JavaScript language** because it already has a special
meaning built into the syntax (e.g. `if`, `for`, `function`, `class`). Keywords are part of the grammar
itself — the JS engine's parser looks for them to understand the *structure* of your code.

Because of this, keywords **cannot be used as identifiers** — you cannot name a variable, function, class,
or parameter after a keyword.

```javascript
let if = 5;      // ❌ SyntaxError: if is a reserved word
let class = "x"; // ❌ SyntaxError: class is a reserved word
let total = 5;   // ✅ fine — "total" is not a keyword
```

## Comparison Table — All JavaScript Keywords

| Keyword | Category | Description | Example |
|---|---|---|---|
| `var` | Declaration | Declares a function-scoped (or globally-scoped) variable | `var x = 10;` |
| `let` | Declaration | Declares a block-scoped variable | `let x = 10;` |
| `const` | Declaration | Declares a block-scoped, read-only (non-reassignable) binding | `const PI = 3.14;` |
| `function` | Function | Declares a function | `function greet() {}` |
| `return` | Function | Exits a function and optionally returns a value | `return total;` |
| `yield` | Function | Pauses/resumes a generator function | `yield value;` |
| `async` | Function | Marks a function as asynchronous (returns a Promise) | `async function load() {}` |
| `await` | Function | Pauses execution until a Promise settles (inside `async`) | `await fetchData();` |
| `if` | Control flow | Executes code conditionally | `if (x > 0) {}` |
| `else` | Control flow | Alternate branch for `if` | `else { ... }` |
| `switch` | Control flow | Multi-branch conditional | `switch (x) { ... }` |
| `case` | Control flow | Defines a branch inside `switch` | `case 1:` |
| `default` | Control flow | Fallback branch in `switch` (also used in module exports) | `default: ...` |
| `for` | Loop | Loops with an initializer/condition/step | `for (let i=0;i<5;i++) {}` |
| `while` | Loop | Loops while a condition is true | `while (x < 5) {}` |
| `do` | Loop | Runs a loop body at least once, then checks condition | `do { ... } while (x < 5);` |
| `break` | Loop / switch | Exits a loop or `switch` block early | `break;` |
| `continue` | Loop | Skips to the next iteration of a loop | `continue;` |
| `in` | Loop / operator | Iterates over enumerable property keys / checks key existence | `for (let k in obj) {}` |
| `of` | Loop | Iterates over iterable values (arrays, strings, Maps, etc.) | `for (let v of arr) {}` |
| `try` | Exception handling | Wraps code that might throw an error | `try { ... }` |
| `catch` | Exception handling | Handles an error thrown in `try` | `catch (err) { ... }` |
| `finally` | Exception handling | Runs code after `try`/`catch`, regardless of outcome | `finally { ... }` |
| `throw` | Exception handling | Manually raises an exception | `throw new Error("bad");` |
| `class` | Class | Declares a class | `class Animal {}` |
| `extends` | Class | Sets up inheritance between classes | `class Dog extends Animal {}` |
| `super` | Class | Calls the parent class's constructor/methods | `super();` |
| `static` | Class | Declares a member that belongs to the class itself, not instances | `static count = 0;` |
| `new` | Class / operator | Creates a new instance of a class/constructor function | `new Date();` |
| `this` | Context | Refers to the current execution context/object | `this.name = "Bob";` |
| `import` | Module | Brings exports from another module into scope | `import { a } from "./a.js";` |
| `export` | Module | Makes a variable/function/class available to other modules | `export default App;` |
| `typeof` | Operator | Returns the type of a value as a string | `typeof x === "number"` |
| `instanceof` | Operator | Checks if an object is an instance of a class/constructor | `x instanceof Array` |
| `delete` | Operator | Removes a property from an object | `delete obj.prop;` |
| `void` | Operator | Evaluates an expression and returns `undefined` | `void 0` |
| `debugger` | Debugging | Triggers a breakpoint if dev tools are open | `debugger;` |
| `with` | Legacy (avoid) | Extends the scope chain for a statement (disallowed in strict mode) | `with (obj) { ... }` |
| `null` | Literal value | Represents an intentional absence of any value | `let x = null;` |
| `true` / `false` | Literal value | Boolean literals | `let ok = true;` |
| `enum` | Reserved (future use) | Reserved for potential future use — not implemented in JS | — |
| `implements`, `interface`, `package`, `private`, `protected`, `public` | Reserved (strict mode future use) | Reserved in strict mode for potential future use (e.g. TypeScript-like features) | — |

## Key Takeaway

| | Can be used as a variable name? | Has special syntax meaning? |
|---|---|---|
| Keywords (`if`, `class`, `return`, ...) | ❌ No | ✅ Yes — parsed as language syntax |
| Reserved future words (`enum`, `interface`, ...) | ❌ No | ⚠️ Not used yet, but blocked for future features |
| Regular identifiers (`total`, `userName`, ...) | ✅ Yes | ❌ No |
