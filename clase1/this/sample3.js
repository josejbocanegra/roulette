const juan = {
  name: "Juan",
  age: 7,
};

const majo = {
  name: "Majo",
  age: 10,
};

const talk = (obj) => {
  obj.sayHello = function () {
    console.log(this.name);
  };
};

talk(juan);
talk(majo);

juan.sayHello();
majo.sayHello();
