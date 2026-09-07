
// Examples of the "cycling index" relation used in:
//   let role = ROLES[(i - 1) % ROLES.length];
//
// The general relation is:
//   array[ index % array.length ]
// where `index` just needs to count upward (0, 1, 2, 3, ...) forever.
// The `% array.length` part is what wraps it back to the start.
 
console.log("=== Example 1: 1-based counter (the original line) ===");
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];
for (let i = 1; i <= 12; i++) {
  const role = ROLES[(i - 1) % ROLES.length];
  console.log(`i=${i} -> ${role}`);
}
 
console.log("\n=== Example 2: 0-based counter (no need for the -1) ===");
// If your loop variable already starts at 0, you don't need the "-1" trick.
for (let i = 0; i < 12; i++) {
  const role = ROLES[i % ROLES.length];
  console.log(`i=${i} -> ${role}`);
}
 
console.log("\n=== Example 3: cycling through days of the week ===");
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
for (let dayNumber = 1; dayNumber <= 10; dayNumber++) {
  const day = DAYS[(dayNumber - 1) % DAYS.length];
  console.log(`Day ${dayNumber} of the trip -> ${day}`);
}
 
console.log("\n=== Example 4: cycling colors for alternating table rows ===");
const ROW_COLORS = ["white", "gray"];
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
  const color = ROW_COLORS[rowIndex % ROW_COLORS.length];
  console.log(`Row ${rowIndex} -> background: ${color}`);
}
 
console.log("\n=== Example 5: same relation, using a while loop instead of for ===");
let count = 1;
while (count <= 8) {
  const role = ROLES[(count - 1) % ROLES.length];
  console.log(`count=${count} -> ${role}`);
  count++;
}
 
console.log("\n=== Example 6: same relation, using Array.from (no manual loop at all) ===");
const cycledRoles = Array.from({ length: 12 }, (_, i) => ROLES[i % ROLES.length]);
console.log(cycledRoles);
 
console.log("\n=== Example 7: plain iteration (no cycling) for comparison ===");
// This is the DIFFERENT, more common kind of "iterate an array" -
// visiting each element once, in order, no wraparound.
for (const role of ROLES) {
  console.log("role:", role);
}
ROLES.forEach((role, index) => console.log(`forEach index ${index}: ${role}`));
 


