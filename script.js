// MAP
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares);
// FILTER
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers);
// REDUCE
const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue,
0);
console.log(sum);
// FOREACH
const names = ['Alice', 'Bob', 'Charlie', 'David'];
names.forEach(name => {
console.log(name);
});

function createCounter() {
    let count = 0;
    return function() {
    count++;
    return count;
    };
    }
    const counter = createCounter();
    console.log(counter());
    console.log(counter());
    console.log(counter());
    // IIFE
    const myModule = (function() {
    let privateVariable = 'I am private';
    return {
    getPrivateVariable: function() {
    return privateVariable;
    }
    };
    })();
    console.log(myModule.getPrivateVariable());