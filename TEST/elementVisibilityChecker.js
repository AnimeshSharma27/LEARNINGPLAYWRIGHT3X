

function elementVisibilityChecker(isPresent, isDisplayed, isEnabled) {
   let status;
   let action;

   if (isPresent === false) {
      status = "NOT FOUND";
      action = "Element does not exist in the DOM. Check the locator/selector or verify the page/component has loaded.";
   } else if (isPresent === true && isDisplayed === false) {
      status = "HIDDEN";
      action = "Element exists but is not visible. Wait for visibility, scroll into view, or check CSS/display logic.";
   } else if (isPresent === true && isDisplayed === true && isEnabled === false) {
      status = "DISABLED";
      action = "Element is visible but disabled. Wait for the enabling condition (e.g. form validation, async load) before interacting.";
   } else if (isPresent === true && isDisplayed === true && isEnabled === true) {
      status = "READY";
      action = "Element is ready. Proceed with the interaction (click/type/etc).";
   } else {
      status = "UNKNOWN";
      action = "Unexpected state combination. Review the input flags.";
   }
   const severity =
      isPresent === false
         ? "CRITICAL"
         : (isDisplayed === false || isEnabled === false)
            ? "WARNING"
            : "OK";

   console.log("----- Element State Check -----");
   console.log(`isPresent   : ${isPresent}`);
   console.log(`isDisplayed : ${isDisplayed}`);
   console.log(`isEnabled   : ${isEnabled}`);
   console.log(`Status      : ${status}`);
   console.log(`Severity    : ${severity}`);
   console.log(`Action      : ${action}`);
   console.log("--------------------------------");

   return { status, severity, action };
}

elementVisibilityChecker(true, true, true);   
elementVisibilityChecker(true, true, false);   
elementVisibilityChecker(true, false, false);  
elementVisibilityChecker(false, false, false); 