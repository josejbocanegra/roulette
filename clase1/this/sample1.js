const person = {
  name: "Juan",
  age: 7,
  sayHello: function () {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.sayHello();
