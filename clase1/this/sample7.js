const person = {
  name: "Juan",
  age: 6,
  sayHello: function () {
    console.log(`I am ${this.name}`);
    this.myAge();
  },
  myAge: function () {
    console.log(`I am ${this.age} years old`);
  },
};

person.sayHello();
