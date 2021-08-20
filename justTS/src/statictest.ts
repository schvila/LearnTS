import Module from "module";
import ITestable from "./itestable";

class Employee {
  static code = "EmplCode1";
  static createEmployee(nval: string) {
    return { name: nval };
  }
}

class StaticTest implements ITestable {
  name = "Static method and prop";
  Run() {
    console.log(Employee.code);
    console.log(Employee.createEmployee("Suzane"));
  }
}
export default new StaticTest();
