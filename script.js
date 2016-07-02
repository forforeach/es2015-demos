let firstUser = { name: 'Dima', isActive: false }
let secondUser = { name: 'Trololosha', isActive: true };

let totalLogins = {};
totalLogins[firstUser] = 5;
totalLogins[secondUser] = 60;

console.log(JSON.stringify(totalLogins, null, 2));