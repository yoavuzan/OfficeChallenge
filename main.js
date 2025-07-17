//write your code here to make the tests pass
class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
  work(office) {
    office.documents.push(
      ...Array(10)
        .fill()
        .map(() => new Document(this.name))
    );
  }
}
class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  hireEmployee(name) {
    this.employees.push(new Employee(name));
  }
  askEmployeesToWork(office) {
    this.employees.forEach((employee) => employee.work(office));
  }
}
class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}
class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }
  hireCleaner(name) {
    this.cleaners.push(new Cleaner(name));
  }
  hireManager(name) {
    this.managers.push(new Manager(name));
  }
  startWorkDay() {
    this.cleaners.forEach((cleaner) => cleaner.clean());
    this.managers.forEach((manager) => manager.askEmployeesToWork(this));
  }
}
