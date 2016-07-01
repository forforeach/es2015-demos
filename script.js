function createContact(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName
    }
}

let contact = createContact('Dima', 'Kuzmich');

console.log(JSON.stringify(contact, null, 2));