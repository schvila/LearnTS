class Person{
    name = 'Stan1';
    age = 57;
    sayHello(){
        console.log(`Hello ${this.name} aged ${this.age}`);
    }
}
let p = new Person();
p.name = 'John2';
p.sayHello();