```javascript
// JavaScript Objects Summary

// Definition
// Objects in JavaScript are complex data types that allow you to store and organize data using key-value pairs.
// Keys are strings (or symbols) that act as property names, and values can be any data type, including other objects.

// Creation
// Objects are created using curly braces {}.
let person = {
  name: "John",
  age: 25,
  occupation: "Developer"
};

// Accessing Properties
// Use dot notation (object.key) or square bracket notation (object['key']) to access values.
console.log(person.name); // Output: John

// Adding/Modifying Properties
// Add new properties or modify existing ones by assigning values.
person.location = "City";
person.age = 26;

// Methods
// Functions can be properties (methods) of an object.
let car = {
  brand: "Toyota",
  start: function() {
    console.log("Engine started!");
  }
};

car.start(); // Output: Engine started!

// Object Literal Shorthand
// Shorthand notation if variable names match key names.
let name = "Alice";
let age = 30;
let person = { name, age };

// Nested Objects
// Objects can contain other objects.
let address = {
  street: "123 Main St",
  city: "Town",
  zip: "12345"
};

let person = {
  name: "Bob",
  age: 28,
  address: address
};

