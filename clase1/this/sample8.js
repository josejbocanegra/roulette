const person = {
  name: "Juan",
  sayHello: function (place) {
    const formal = `Good morning. My name is ${this.name}`;
    const informal = "Hi";

    const response = place === "School" ? formal : informal;

    console.log(response);
  },
};

person.sayHello("School");
person.sayHello("Friends");
