
function retryFailedAPICall() {

   const MAX_ATTEMPTS = 5;
   let attempt = 0;
   let success = false;

   do {
      attempt++;
      const randomValue = Math.random();
      success = randomValue > 0.6;

      console.log(
         `Attempt ${attempt}/${MAX_ATTEMPTS} -> ${success ? "SUCCESS" : "FAILURE"} ` +
         `(randomValue: ${randomValue.toFixed(3)})`
      );
   } while (!success && attempt < MAX_ATTEMPTS);

   console.log("----- Final Result -----");
   if (success) {
      console.log(`API call succeeded after ${attempt} attempt(s).`);
   } else {
      console.log(`API call failed after ${attempt} attempt(s). Giving up.`);
   }
   console.log("-------------------------");

   return { success, attempts: attempt };
}


retryFailedAPICall();
