function printArray(array) {
    array = Array.isArray(array) ? array : [];
    array.forEach(function (element) {
        console.log(element);
    });
}

printArray([1, 2, 3, 4, 5]);
printArray();