let firstUser = { name: 'Dima', isActive: false }
let secondUser = { name: 'Trololosha', isActive: true };

let totalLogins = new Map();
totalLogins.set(firstUser, 5);
totalLogins.set(secondUser, 60);

console.log(totalLogins);