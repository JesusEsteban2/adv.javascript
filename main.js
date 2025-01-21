function testArray() {
    const a = [1, 2, 3, 4, 5, 6];

    a.forEach((item) => {
        if (item === 3) {
        }
    });
    console.log(Object.is(a, b));
}

const fun = (a, b) => a + b;
console.log(fun(2, 3)); //5

const per = (name, age) => {
    return { name: name, age: age };
};
console.dir(per("pepe", 22));

const modifiObject = (obj) => {
    obj.age = 23;
};

// Desestructuración.
const calcuNextAge = ({ ...obj }) => {
    obj.age++;
    console.log(obj.age);
};

const user = {
    user: "pepe",
    age: 22,
};

console.log("Original:", user);
modifiObject(user);
console.log("Despues de modify: ", user);
calcuNextAge(user);
console.log("Despues de calculate: ", user);

function media(...par) {
    let i = 0;
    let sum = 0;
    for (num in par) {
        i++;
        sum += num;
    }
    return sum / num + 1;
}

const numeros = [2, [4, [5, 6], 7], 9];
const fa = numeros.flat(Infinity);
console.log(fa);

// Object create
const person = {
    name: "Juan",
    isHuman: false,
    direccion: { calle: "Pez", city: "Teruel" },
    greet: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.direccion.city = "Cuenca";

person.greet();
me.greet();
// Expected output: "My name is Matthew. Am I human? true"
console.log(person);
console.log(me);
