

function role(role) {
  switch (role) {
    case "admin":
      return "You have full access";
    case "editor":
      return "You can edit content";
    case "viewer":
      return "You can view content";
    default:
      return "Role not recognized";
  }
}

console.log(role("admin")); // "You have full access"
console.log(role("editor")); // "You can edit content"
console.log(role("viewer")); // "You can view content"
console.log(role("guest")); // "Role not recognized"
