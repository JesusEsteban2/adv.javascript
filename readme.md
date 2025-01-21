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

### 1- Operador spread

Solo desestructura el primer nivel. La dirección se copia, pero sigue compartida.

```js
// Spread
const person = {
    name: "Yo Robot",
    isHuman: false,
    direccion: { calle: "Pez", city: "Teruel" },
};

const me = { ...person };

me.name = "Pepe";
me.isHuman = true;
me.direccion.city = "Cuenca";

console.log(person, me);
```

Salida:
{
name: 'Yo Robot',
isHuman: false,
direccion: { calle: 'Pez', city: 'Cuenca' }
} {
name: 'Pepe',
isHuman: true,
<mark>direccion: { calle: 'Pez', city: 'Cuenca' }</mark>
}

### 2-Object.create(obj)

Solo desestructura el primer nivel. La dirección no se copia, pero sigue compartida.

```js
// Object create
const person = {
    name: "Yo Robot",
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
```

Salida:
{
name: 'Yo Robot',
isHuman: false,
<mark> direccion: { calle: 'Pez', city: 'Cuenca' } </mark>
} { name: 'Pepe', isHuman: true }

### 3-structuredClone()

Desestructura todos los niveles.

```js
// structuredClone(obj);
const person = {
    name: "Yo Robot",
    isHuman: false,
    direccion: { calle: "Pez", city: "Teruel" },
};

const me = structuredClone(person);

me.name = "Pepe";
me.isHuman = true;
me.direccion.city = "Cuenca";

console.log(person, me);
```

Salida:
{
name: 'Yo Robot',
isHuman: false,
direccion: { calle: 'Pez', city: 'Teruel' }
} {
name: 'Pepe',
isHuman: true,
direccion: { calle: 'Pez', city: 'Cuenca' }
}

### 4-Object.assign()

La función Object.assign() es otra forma de clonar objetos en JavaScript. La función toma un objeto destino como primer argumento, y uno o más objetos fuente como argumentos adicionales. Solo independiza el primer nivel.

```js
const person = {
    name: "Yo Robot",
    isHuman: false,
    direccion: { calle: "Pez", city: "Teruel" },
};

const me = Object.assign({}, person);

me.name = "Pepe";
me.isHuman = true;
me.direccion.city = "Cuenca";

console.log(person, me);
```

Salida:
{
name: 'Yo Robot',
isHuman: false,
<mark>direccion: { calle: 'Pez', city: 'Cuenca' }</mark>
} {
name: 'Pepe',
isHuman: true,
direccion: { calle: 'Pez', city: 'Cuenca' }
}

### 5-JSON.parse(JSON.stringify(obj))

Esta forma también desestructura todos los niveles.

```js
const person = {
    name: "Yo Robot",
    isHuman: false,
    direccion: { calle: "Pez", city: "Teruel" },
};

const me = JSON.parse(JSON.stringify(person));

me.name = "Pepe";
me.isHuman = true;
me.direccion.city = "Cuenca";

console.log(person, me);
```

Salida:
{
name: 'Yo Robot',
isHuman: false,
direccion: { calle: 'Pez', city: 'Teruel' }
} {
name: 'Pepe',
isHuman: true,
direccion: { calle: 'Pez', city: 'Cuenca' }
}
