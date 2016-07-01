function isArrayTooLong(array) {
    if (array.length > 3) {
        return true;
    } else {
        return false;
    }
}

isArrayTooLong([1, 2, 3, 4, 5]);