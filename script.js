const arr = [1, 2, 3];


const [first, second] = arr;

console.log(first);  
console.log(second); 

const person = { name: 'Alice', age: 25 };
const { name, age } = person;

/////////////////////////

console.log(name);
console.log(age);

function introduce(name, age) {
    return `Hello, I'm ${name} and I'm ${age} years old.`;
}
console.log(introduce("Nitik", 18));

/////////////////////////

function collectNumbers(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}
collectNumbers(1, 2, 3, 4, 5);

const personn = {
    name: "Nitik",
    showThis: function () {
        console.log(this);
    }
};

personn.showThis();
/////////////////////////////

const persson = {
    name: "Nitik",
    showThis: () => {
        console.log(this);
    }
};

persson.showThis();
////////////////////////////////

function createMultiplier(n) {
    return function (number) {
        return number * n;
    };
}



///////////////////////////////


const peerson = {
    name: "Nitik",
    showThis: function () {
        console.log(this);
    }
};

peerson.showThis();


//////////////////////////


const perrson = {
    name: "Nitik",
    showThis: () => {
        console.log(this);
    }
};

perrson.showThis();

/////////////////////////////


function createMultiplier(n) {
    return function (number) {
        return number * n;
    };
}


/////////////////////////////





class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


const person1 = new Person("Nitik", 20);

console.log(person1.name); 
console.log(person1.age);  
