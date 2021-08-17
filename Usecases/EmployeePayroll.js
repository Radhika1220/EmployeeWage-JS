//UC-11
//creating a class
class EmployeePayrollData
{
    //id;
    //salary;
    //name;
    //gender;
    //startDate;
    
    //defining constructor
    constructor(...params)
    {
        this.id1=params[0];
        this.name1=params[1];
        this.salary1=params[2];
        this.gender1=params[3];
        this.startDate1=params[4];
    }

    //getter and setter methods
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        //UC13-->checking the name  contain atleast 3 characters and first character should be capital letter
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        {
        this._name=name;
        }
        else
        {
            throw "Incorrect name";
        }

    }
    //Uc14-->using regex for id,gender,salary
    get id()
    {   
        return this._id;
    }
    set id(id)
    {
       let idRegex=RegExp("^[1-9]|[0-9]{2,}$");
       if(idRegex.test(id))
       {
       this._id=id;
       }
       else
       {
           throw "Incorrect id";
       }
    }
    get salary()
    {
        return this._salary;
    }
    set salary(salary)
    {
        let salaryRegex=RegExp("^[1-9]|[0-9]{2,}$");
        if(salaryRegex.test(salary))
        {
        this._salary=salary
       }
       else
       {
        throw "Incorrect salary";
       }
    }
    get gender()
    {
        return this._gender;
    }
    set gender(gender)
    {
        let genderRegex=RegExp("^M$|^F|^m|^f$");
        if(genderRegex.test(gender))
        {
        this._gender=gender
       }
       else
       {
        throw "Incorrect gender";
       }
    }
    
   get startDate()
   {
       return this._startDate;
   }
   set startDate(startDate)
   {
       if(startDate<=new Date())
       {
       this._startDate=startDate;
      }
      else
      {
       throw "Incorrect startdate";
      }
   }
    toString()
    {
        return "id="+this.id1 + " name="+this.name1 + " salary="+this.salary1 + " Gender="+this.gender1 +" Date="+this.startDate1;
    }
    toString1()
    {
        return "id="+this.id1 + " name="+this.name1 + " salary="+this.salary1;
    }
}
//creating a object for class and passing the parameter(calling constructor)
let employee=new EmployeePayrollData(1,"Radhika",40000);
console.log("Calling constructor and access the property")
console.log(employee.toString1());

let employee1=new EmployeePayrollData(2,"VishnuPriya",55000,'F',new Date());
console.log(employee1.toString());
console.log("Change the property using getter and setter method");
//change the name using getter and setter method

try
{
employee.name="Priya";
console.log(employee.name);
}
catch(e)
{
    console.error(e);
}
try
{
employee.id=3;
console.log(employee.id);
}
catch(e)
{
    console.error(e);
}

try
{
employee.salary=50000;
console.log(employee.salary);
}
catch(e)
{
    console.error(e);
}

try
{
employee.gender='m';
console.log(employee.gender);
}
catch(e)
{
    console.error(e);
}


try
{
employee.startDate=new Date("2021-09-01");
console.log(employee.startDate);
}
catch(e)
{
    console.error(e);
}
