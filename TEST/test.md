
10) Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.

Input : { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
output : ✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED


9) Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).

input : Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
output : Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected

8) n CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

Input: envName = "staging"
output: Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror

7) As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.

input :responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500 
output : Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

6) As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

Input : frequency = "always", impact = "blocker"
output : Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately

5) As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

input : Generate 8 users
output : USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE