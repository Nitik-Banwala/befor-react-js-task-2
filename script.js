////////////////Array Destructuring:////////////////

const arr = [1, 2, 3];


const [first, second] = arr;

console.log(first);  
console.log(second); 

/////////////////Object Destructuring://///////////////

const person = { name: 'Alice', age: 25 };
const { name, age } = person;


console.log(name);
console.log(age);


////////////////////Template Literals:///////////////////////

function introduce(name, age) {
    return `Hello, I'm ${name} and I'm ${age} years old.`;
}
console.log(introduce("Nitik", 18));



///////////////////Rest Operator:///////////////////////



function collectNumbers(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}
collectNumbers(1, 2, 3, 4, 5);


////////////////this in Regular Function://////////////////

const personn = {
    name: "Nitik",
    showThis: function () {
        console.log(this);
    }
};

personn.showThis();



///////////////////this in Arrow Function://////////////////


const persson = {
    name: "Nitik",
    showThis: () => {
        console.log(this);
    }
};

persson.showThis();




////////////////Higher-Order Function:////////////////





function createMultiplier(n) {
    return function (number) {
        return number * n;
    };
}



///////////////Class Constructor:////////////////


const peerson = {
    name: "Nitik",
    showThis: function () {
        console.log(this);
    }
};

peerson.showThis();

