// The hoisting

function greet(name) {
    if (name) {
        var message = 'Hello, ' + name;
        console.log(message);
    } else {
        var warning = 'To get a greeing you should say your name';
        console.warn(warning);
    }
    console.log('message is', message);
    console.log('warning is', warning);
}

greet('everyone');