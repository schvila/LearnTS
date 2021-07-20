import PersonTest from "./persontest";
import gettersetter from "./department";
import ITestable from "./itestable";
import stattest from "./statictest";
import datetest from "./datefnstest";

let tests: ITestable[] = [new PersonTest(), gettersetter, stattest, datetest];
tests.forEach((test) => {
  console.log("--------------------------------------");
  console.log(`Runing test '${test.name}'`);
  test.Run();
});
