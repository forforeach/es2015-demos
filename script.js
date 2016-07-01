function isArrayTooLong(array) {
    const MAX_LENGTH = 3;
    if (array.length > MAX_LENGTH) {
        return true;
    } else {
        return false;
    }
}

isArrayTooLong();