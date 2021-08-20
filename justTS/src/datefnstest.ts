import Module from "module";
import ITestable from "./itestable";

import { format, add, parseJSON } from "date-fns";

class DateFnsTest implements ITestable {
  name = "date-fns library";
  Run() {
    console.log(format(new Date(2014, 1, 11), "MM/dd/yyyy"));
    let d = parseJSON("2021-07-16T04:29:12.339Z");
    console.log(format(d, "dd.M.yyyy"));

    let d1 = Date.now();
    let d2 = add(d1, {
      years: 2,
      weeks: 1,
    });
    console.log(JSON.stringify(d2));
    // console.log(format(d2, "dd.M.yyyy"));
  }
}

export default new DateFnsTest();
