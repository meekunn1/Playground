const map1 = new Map();

map1.set('a', [1,2,3]);
map1.set('b', 2);
map1.set('c', {type:'*',numbers:[1,2,3,4,5], answer:"120"});
map1.set('d', 10);


console.log(map1.get('a'));
// Expected output: 1

console.log(map1.get('c'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
console.log(map1);
console.log(map1.get('c').type);
console.log(map1.get('c').numbers);
console.log(map1.get('c').numbers[2]);
map1.get('c').numbers.push(6);
console.log(`after push function: ${map1.get('c').numbers}`);

function calculate(type,numbers) {
return
}