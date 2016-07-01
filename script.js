function createContact(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return { firstName, lastName, fullName };
}

let contact = createContact('Dima', 'Kuzmich');

console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.fullName);