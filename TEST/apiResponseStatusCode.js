
function apiResponseStatusCode(input){
switch (input) {
case (200): return "Status Code : 200 Result : PASS - OK: Request successful";
case(201): return "Status Code : 201 Result: PASS - Created: Resource created successfully";
   case (301): return "Status Code : 301 Result: WARNING - Moved Permanently: URL has changed";
   case (400): return "Status Code : 400 Result: FAIL - Bad Request: Check request payload";
   case (401): return "Status Code : 401 Result: FAIL - Unauthorized: Check auth token";
   case (403): return "Status Code : 403 Result: FAIL - Forbidden: Insufficient permissions";
   case (404): return "Status Code : 404 Result: FAIL - Not Found: Check endpoint URL";
   case (500): return "Status Code : 500 Result: FAIL - Internal Server Error: Backend issue";
default: "UNKNOWN - Unhandled status code";
}
};


console.log(apiResponseStatusCode(200));

