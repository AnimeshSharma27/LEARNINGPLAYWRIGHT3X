
const TOTAL_USERS = 8;
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];
const EMAIL_DOMAIN = "testingacademy.com";
const INACTIVE_EVERY_NTH = 3;

var userCounter = 0; // global counter — function/global-scoped, survives outside the loop

function generateTestUsers() {
  const users = [];

  for (let i = 1; i <= TOTAL_USERS; i++) {
    userCounter++;

    const id = `USR-${String(i).padStart(4, "0")}`;
    const name = `TestUser_${i}`;
    const email = `testuser${i}@${EMAIL_DOMAIN}`;
    let role = ROLES[(i - 1) % ROLES.length];
    const status = i % INACTIVE_EVERY_NTH === 0 ? "INACTIVE" : "ACTIVE";

    const user = { id, name, email, role, status };
    users.push(user);
    console.log(`${id} | ${name} | ${email} | ${role} | ${status}`);
  }

  return users;
}

const testUsers = generateTestUsers();