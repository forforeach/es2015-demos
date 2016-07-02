let users = [
    { name: 'Dima', isActive: false },
    { name: 'Trololosha', isActive: true },
    { name: 'Foo', isActive: true }
];

let firstActiveUser = users.find(user => user.isActive);
console.log(firstActiveUser);