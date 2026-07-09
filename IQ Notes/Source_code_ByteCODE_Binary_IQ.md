# Source Code vs Bytecode vs Binary Code

## Example file
[Chapter_01/01_HellloWorld.js](Chapter_01/01_HellloWorld.js)

```javascript
console.log("Hello The Testing Academy");
```

## Comparison Table

| Aspect | Source Code | Bytecode | Binary Code (Machine Code) |
|---|---|---|---|
| **Definition** | Human-readable instructions written by a developer in a programming language | An intermediate, lower-level representation generated from source code, not directly tied to any physical CPU | The lowest-level representation — raw 0s and 1s that a specific CPU can execute directly |
| **Example (this file)** | `console.log("Hello The Testing Academy");` | V8's Ignition interpreter converts this into an internal instruction set, roughly like: `LdaConstant [0]`, `Star r0`, `CallProperty0 console.log, r0`, `Return` (simplified/illustrative) | The above bytecode (or JIT-compiled hot code) is turned into actual x86-64/ARM machine instructions, e.g. `48 8B 05 ... FF D0 ...` (raw hex opcodes) |
| **Who reads it** | Humans (developers) | A virtual machine / interpreter (e.g. V8's Ignition VM for Node.js) | The physical CPU |
| **File in this project** | `01_HellloWorld.js` as saved on disk | Not saved as a file — generated in memory by V8 when Node.js runs the script | Not saved as a file either — generated in memory by V8's TurboFan JIT compiler for "hot" (frequently run) code, or produced ahead-of-time by compilers like C/C++ into a `.exe` |
| **Portability** | Fully portable — same `.js` file runs on Windows, Mac, Linux as long as Node.js/a JS engine is installed | Portable across machines but tied to the specific VM/engine (V8 bytecode won't run on a different JS engine like SpiderMonkey) | Not portable — tied to a specific CPU architecture (x86-64 binary won't run on ARM without translation) |
| **Speed** | N/A (not executable directly) | Slower than machine code; interpreted/executed step by step by the VM | Fastest — executed natively by the CPU with no translation layer |
| **How it's produced** | Written directly by the developer | Produced by a compiler/parser stage (for Node.js: V8's parser → AST → Ignition bytecode) | Produced by a JIT compiler (V8's TurboFan) at runtime, or by an ahead-of-time compiler (like `gcc`/`clang`) before running |
| **Analogy** | A recipe written in English | The recipe translated into standardized cooking steps a trained chef-in-training (VM) follows | The chef's actual hand and knife movements — the final physical actions |
| **Typical file extension** | `.js`, `.py`, `.java`, `.c` | Usually none (in-memory); when cached, e.g. `.jsc` (V8 code cache) or `.class`/`.pyc` for Java/Python | `.exe`, `.dll`, `.so`, `.bin`, or no extension (compiled executables) |

## How this specific example flows (Node.js + V8 engine)

1. **Source Code** — You write `console.log("Hello The Testing Academy");` in [01_HellloWorld.js](Chapter_01/01_HellloWorld.js).
2. **Parsing** — When you run `node 01_HellloWorld.js`, V8 parses the text into an Abstract Syntax Tree (AST).
3. **Bytecode** — V8's Ignition interpreter compiles the AST into V8 bytecode, an intermediate form that's fast to generate and platform-independent.
4. **Binary/Machine Code** — Ignition begins executing the bytecode immediately. If the code is run repeatedly (a "hot" function), V8's TurboFan JIT compiler kicks in and compiles it further into optimized native machine code for your CPU (x86-64 or ARM), which runs directly on the hardware.

## Key takeaway

| | Distance from Human | Distance from Hardware |
|---|---|---|
| Source Code | Closest to human | Farthest from hardware |
| Bytecode | Middle ground | Middle ground |
| Binary Code | Farthest from human | Closest to hardware |
