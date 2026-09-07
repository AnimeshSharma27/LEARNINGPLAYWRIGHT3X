

function generateTestReport(results) {
  let passed = 0;
  let failed = 0;
  let skipped = 0;
 
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
 
    if (result === "pass") {
      passed++;
    } else if (result === "fail") {
      failed++;
    } else if (result === "skip") {
      skipped++;
    } else {
      console.warn(`Unrecognized result at index ${i}: "${result}"`);
    }
  }
 
  const total = results.length;

  const passRate = total === 0 ? 0 : (passed / total) * 100;
 
  let verdict;
  if (failed === 0) {
    verdict = "All tests passed. Ready for release.";
  } else if (failed <= 2) {
    verdict = "Minor failures. Review before release.";
  } else {
    verdict = "Multiple failures. Block release.";
  }
 
  console.log(`Total Tests : ${total}`);
  console.log(`Passed      : ${passed}`);
  console.log(`Failed      : ${failed}`);
  console.log(`Skipped     : ${skipped}`);
  console.log(`Pass Rate   : ${passRate.toFixed(2)}%`);
  console.log(`VERDICT     : ${verdict}`);
 
  return { total, passed, failed, skipped, passRate, verdict };
}
 

const testResults = [
  "pass", "pass", "fail", "pass", "skip",
  "pass", "fail", "pass",
];
 
generateTestReport(testResults);
 