const numbers = [1,2,3,4,5];
function add(a, b, c, d, e) {
    return a + b + c + d + e;
}
const sum = add(...numbers);
console.log(sum); 
let myObject = { 
    name: 'MJ', 
}; 
let {name} = myObject; 
console.log(myObject.name); 
const numbers2 = [6,7,8,9,10];
const combinedNumbers = [...numbers, ...numbers2];
console.log(combinedNumbers);
