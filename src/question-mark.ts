// ternary operator
const age : number  = 15;

const isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult);

const isAuthenticatedUser = " ";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ?  isAuthenticatedUser : "Guest";
console.log({userName}, {userName2});