//VARIABLES

const x  = 1;
const y = 5;

console.log(x, y) // 1, 5 printed
y += 10;
console.log(x, y) //1, 15 printed
y = 'sometext';
console.log(x, y);
// x = 4 (causes error: const reassignment)

//ARRAYS

const t = [1, 4, 6, 3, -2];

t.push(10);
console.log(t.length) //7 printed
console.log(t[2]) //6 printed

t.forEach(value => {
    console.log(values) //numbers 1, 4, 6, ...etc printed each on own line
})

const t2 = t.concat(5);

console.log(t) //old array still the same
console.log(t2) //returns new array

const m1 = t.map(value => value * 2);
console.log(m1); // [2, 8, 12, 6, -4] new array returned 

const [first, second, ...rest] = t;
console.log(first, second) // 1, 4 printed
console.log(...rest) // 6, 3, -2 printed

//OBJECTS

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD'
}

const object2 = {
    name: 'Full Stack web application development', 
    level: 'intermediate studies',
    size: 5
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

//properties of ojects are referenced using dot notation or brackets
console.log(object1.name) //'Arto Hellas
const fieldName = 'age';
console.log(object1[fieldName]) //35 printed

//can add properties to an object using same methods
object1.address = 'Helsinki';
object1['secret number'] = 12341;


//FUNCTIONS
const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
}

const result = sum(1, 4);
console.log(result); //5 printed

//can exclude parentheses from definition if only ONE parameter
const square = p => {
    console.log(p);
    return p * p;
}

//Referencing functions
function product(a, b){
    return a * b;
}

const Result = product(2, 6);
//Result is now 12

const average = function(a, b){
    return (a +  b) / 2;
}

const rEsult = (2, 5);
//rEsult is 3.5

