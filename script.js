function createContact(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return {
        firstName,
        lastName,
        printFullName: function () {
            console.log(fullName);
        }
    };
}

let contact = createContact('Dima', 'Kuzmich');
contact.printFullName();