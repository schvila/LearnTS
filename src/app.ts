import PersonTest from "./persontest";
import gettersetter from "./department";
import ITestable from "./itestable";
import stattest from "./statictest";

let tests: ITestable[] = [new PersonTest(), gettersetter, stattest];
tests.forEach((test) => {
  console.log("--------------------------------------");
  console.log(`Runing test '${test.name}'`);
  test.Run();
});
