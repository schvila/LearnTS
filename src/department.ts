import Module from "module";
import ITestable from "./itestable";

// getter and setter
class Department {
  private name: string;
  constructor(n: string = "DEFAULT") {
    this.name = n;
  }
  get deprtmentName() {
    if (this.name) {
      return this.name;
    }
    throw new Error("Department name is empty");
  }
  set deprtmentName(val: string) {
    if (!val) {
      throw new Error("Pass valid Department name value");
    }
    this.name = val;
  }
}

class GetterTest implements ITestable {
  name: string = "Getter/setter";
  Run() {
    //console.log();
    let dep = new Department("IT");
    dep.deprtmentName = "Accounting";
    console.log("Test result: ", dep.deprtmentName);
  }
}
export default new GetterTest();
