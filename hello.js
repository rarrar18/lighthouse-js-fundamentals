const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello(); //prints out Hello undefined
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//using a return value instead of solely console.log
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);