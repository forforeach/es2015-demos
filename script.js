let tags = new Set();

tags.add('tech');
tags.add('dev');
tags.add('es2015');
tags.add('es2015');

console.log('Total tags ', tags.size);
console.log(tags);


let [a, b, c] = tags;
console.log(a, b, c);