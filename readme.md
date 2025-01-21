# Abreviaturas js

## Return en arrow function.

```js
const fun = (a, b) => a + b; === const fun = (a, b) => {return a + b};
//5
```

## asignación de propiedades de objetos.

```js
const per = (name, age) => ({ name, age }); === const per = (name, age) => {return {name:name,age:age}};

//{ name: 'pepe', age: 22 }
```

## Desestructuración

https://dev.to/khriztianmoreno/clonar-un-objeto-en-javascript-4-mejores-formas-ejemplos-1bke

```js
const user = {
    user: "pepe",
    age: 22,
};
const modifiObject = (obj) => {
    obj.age = 23;
};

// Desestructuración.
const calcuNextAge = ({ ...obj }) => {
    obj.age++;
    console.log(obj.age);
};

console.log("Original:", user);
modifiObject(user);
console.log("Despues de modify: ", user);
calcuNextAge(user);
console.log("Despues de calculate: ", user);
```
