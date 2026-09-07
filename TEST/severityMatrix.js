
function classifyBug(bugTitle, frequency, impact) {
  let severity;
  let description;
 
  if (frequency === "always") {
    if (impact === "blocker") {
      severity = "P0";
      description = "Critical: Stop release immediately";
    } else if (impact === "major") {
      severity = "P1";
      description = "High: Must fix before release";
    } else if (impact === "minor") {
      severity = "P2";
      description = "Medium: Fix in this release cycle";
    } else {
      severity = "N/A";
      description = "Unknown impact value";
    }
  } else if (frequency === "often") {
    if (impact === "blocker") {
      severity = "P1";
      description = "High: Must fix before release";
    } else if (impact === "major") {
      severity = "P2";
      description = "Medium: Fix in this release cycle";
    } else if (impact === "minor") {
      severity = "P3";
      description = "Low: Fix in a future sprint";
    } else {
      severity = "N/A";
      description = "Unknown impact value";
    }
  } else if (frequency === "rarely") {
    if (impact === "blocker") {
      severity = "P2";
      description = "Medium: Fix in this release cycle";
    } else if (impact === "major") {
      severity = "P3";
      description = "Low: Fix in a future sprint";
    } else if (impact === "minor") {
      severity = "P4";
      description = "Trivial: Fix if/when time permits";
    } else {
      severity = "N/A";
      description = "Unknown impact value";
    }
  } else {
    severity = "N/A";
    description = "Unknown frequency value";
  }
 
  console.log(`Bug Title: ${bugTitle}`);
  console.log(`Frequency: ${frequency}`);
  console.log(`Impact: ${impact}`);
  console.log(`Severity: ${severity} - ${description}`);
 
  return { severity, description };
}
 
// --- Example usage: matches the sample input/output given ---
classifyBug("Checkout page crashes on applying coupon", "always", "blocker");