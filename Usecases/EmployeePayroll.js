//UC-11
//creating a class
class EmployeePayrollData
{
    //property
    id;
    name;
    salary;
    //adding the property of gender and startdate
    gender;
    startDate;
    //defining constructor
    constructor(...params)
    {
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
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
        return "id="+this.id + " name="+this.name + " salary="+this.salary + " Gender="+this.gender +" Date="+this.startDate;
    }
    toString1()
    {
        return "id="+this.id + " name="+this.name + " salary="+this.salary;
    }
}
//creating a object for class and passing the parameter(calling constructor)
let employee=new EmployeePayrollData(1,"Radhika",40000);
console.log("Calling constructor and access the property")
console.log(employee.toString1());

console.log("Change the property using getter and setter method");
//change the name using getter and setter method
employee.name="Priya";
employee.salary="50000"
console.log(employee.toString1());

let employee1=new EmployeePayrollData(2,"VishnuPriya",55000,'F',new Date());
console.log(employee1.toString());

