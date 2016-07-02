let tags = ['async', 'tags', 'grabbed'];

let [a, b, c] = tags;
console.log(a, b, c);

let [x, , y] = tags;
console.log(x, y);

let [first, ...rest] = tags;
console.log(first, rest);