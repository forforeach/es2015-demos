function createContact(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return { firstName, lastName, fullName };
}

let contact = createContact('Dima', 'Kuzmich');

console.log(JSON.stringify(contact, null, 2));