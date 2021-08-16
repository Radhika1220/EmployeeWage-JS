//UC-11
//creating a class
class EmployeePayrollData
{
    //property
    id;
    name;
    salary;
    //defining constructor
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    //getter and setter methods
    get name()
    {
        return this.name;
    }
    set name(name)
    {
        this.name=name;
    }
    get salary()
    {
        return this.salary;
    }
    set salary(salary)
    {
        this.salary=salary
    }
    //tostring method
    toString()
    {
        return "id="+this.id + " name="+this.name + " salary="+this.salary;
    }
}
//creating a object for class and passing the parameter(calling constructor)
let employee=new EmployeePayrollData(1,"Radhika",40000);
console.log("Calling constructor and access the property")
console.log(employee.toString());
console.log("Change the property usin getter and setter method");
//change the name using getter and setter method
employee.name="Priya";
employee.salary="50000"
console.log(employee.toString());