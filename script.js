function isArrayTooLong(array) {
    // var maxLength = 3;
    // const MAX_LENGTH;
    // MAX_LENGTH = 3;
    const MAX_LENGTH = 3;
    if (array.length > MAX_LENGTH) {
        return true;
    } else {
        return false;
    }
}

isArrayTooLong([1, 2, 3, 4, 5]);