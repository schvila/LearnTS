import Module from "module";
import ITestable from "./itestable";

class Person {
  // name = 'Stan1';
  // age = 57;
  sayHello() {
    console.log(`Hello ${this.name} aged ${this.age}`);
  }
  // Shorthand initialization
  constructor(public name: string, private age: number = 57) {}
}
class PersonTest implements ITestable {
  name: string = "Shorthand initialization";

  Run() {
    let p = new Person("stan1");
    p.name = "John3";
    p.sayHello();
  }
}

export default PersonTest;
