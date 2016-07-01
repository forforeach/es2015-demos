function createContact(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return { firstName, lastName, fullName };
}

let {firstName, lastName, fullName}
    = createContact('Dima', 'Kuzmich');

console.log(firstName);
console.log(lastName);
console.log(fullName);