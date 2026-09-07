

// Analyzes API response times using a while loop.
// Tracks min/max via comparison operators, sums for the average, and
// counts SLA breaches (responses that took longer than SLA_LIMIT ms).
 
function analyzePerformance(responseTimes, SLA_LIMIT) {
  let index = 0;
  let min = responseTimes[0];
  let max = responseTimes[0];
  let sum = 0;
  let breachCount = 0;
 
  while (index < responseTimes.length) {
    const time = responseTimes[index];
 
    // comparison operators for min/max tracking
    if (time < min) {
      min = time;
    }
    if (time > max) {
      max = time;
    }
 
    sum += time;
 
    if (time > SLA_LIMIT) {
      breachCount++;
    }
 
    index++;
  }
 
  const total = responseTimes.length;
  const average = sum / total;
  const breachPercent = (breachCount / total) * 100;
  const overallStatus = breachCount > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";
 
  console.log(`Total Requests: ${total}`);
  console.log(`Min Response: ${min}ms`);
  console.log(`Max Response: ${max}ms`);
  console.log(`Average Response: ${average.toFixed(2)}ms`);
  console.log(`SLA Breaches: ${breachCount} (${breachPercent.toFixed(2)}%)`);
  console.log(`Overall Status: ${overallStatus}`);
 
  return { total, min, max, average, breachCount, breachPercent, overallStatus };
}
 
// --- Example usage ---
const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;
 
analyzePerformance(responseTimes, SLA_LIMIT);
 


