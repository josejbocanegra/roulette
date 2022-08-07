const person = {
  name: "Juan",
  sayHello: function () {
    console.log(`I am ${this.name}`);
  },
  sister: {
    name: "Majo",
    sayHello: function () {
      console.log(`I am ${this.name}`);
    },
  },
};

person.sayHello();
person.sister.sayHello();
