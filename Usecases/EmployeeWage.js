//If Statement
//UC1-->check employee is present or not
const IS_ABSENT=0;
{
var empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("UC1--->Employee is Absent");
}
else
{
    console.log("UC1--->Employee is Present");
}
}

//UC2-->calculate daily employee wage
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
{
let empHrs=0;
let empWage=0;
var empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HRS;
        console.log("UC2-->Part time employee: "+empHrs);
        break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HRS;
            console.log("UC2--->Full time employee :"+empHrs);
            break;
            default:
                empHrs=0;
                console.log("UC2--->Employee is absent "+empHrs);
}
empWage=empHrs*WAGE_PER_HR;
console.log("UC2--->Emp Wage : "+empWage);
}

//UC3--->Refactor the UC2 Using Function
const PART_TIME=1;
const FULL_TIME=2;
const PART_TIME_HRS1=4;
const FULL_TIME_HRS1=8;
const WAGE_PER_HR1=20;
{

var empCheck=Math.floor(Math.random()*10)%3;
function getWorkinghours(empCheck)
{
switch(empCheck)
{
    case PART_TIME:
        empHrs=PART_TIME_HRS1;
        console.log("UC3-->Part time employee: " +empHrs);
        return empHrs;
        case FULL_TIME:
            empHrs=FULL_TIME_HRS1;
            console.log("UC3--->Full time employee :" +empHrs);
            return empHrs;
            default:
                empHrs=0;
                console.log("UC3--->Employee is absent " +empHrs);
                return empHrs;
}
}
let empHrs1=0;
let empWage1=0;
empHrs1=getWorkinghours(empCheck);
empWage1=empHrs*WAGE_PER_HR1;
console.log("UC3--->Emp Wage : "+empWage1);
}

//UC4--- calculate wages for month assuming 20 working days in month(USING FOR LOOP)

const NUM_OF_WORKING_DAYS=20;
let totalEmpWage=0;
const WAGE_PER_HR2=20;
let empHrs2=0;
let empWage2=0;
for(let i=0;i<NUM_OF_WORKING_DAYS;i++)
{
    var empCheck=Math.floor(Math.random()*10)%3;
     empHrs2=getWorkinghours(empCheck);
    empWage2=empHrs2*WAGE_PER_HR2;
    console.log("emp wage : "+empWage2);
    totalEmpWage+=empWage2;
}
console.log("UC4-->fOR LOOP :TotalEmpWage : "+totalEmpWage ,"Num of Working Days : "+NUM_OF_WORKING_DAYS);

//UC5--->calculate wages for total working hours 160 or max days of 20 in month

const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    var empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkinghours(empCheck);
}
let empWage3=totalEmpHrs*WAGE_PER_HR2;
console.log("UC5-Total Days : "+ totalWorkingDays + " Total Hours : "+totalEmpHrs + " Emp Wage : "+empWage3);
//UC6-->Save the daily wage using array
//creating a function for calculate daily emp wage 
function calculateDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HR2;
}
const MAX_HRS_IN_MONTH1=160;
const NUM_OF_WORKING_DAYS1=20;
let totalEmpHrs1=0;
let totalWorkingDays1=0;
//creating a array
let employeeWageArray=new Array();
//Creating a map function for employeewage
let employeeWageMap=new Map();
//Creating a map function for employeehours
let employeeHourMap=new Map();
//creating a array for object 
let empWageAndHourArray=new Array();
while(totalEmpHrs1<=MAX_HRS_IN_MONTH1 && totalWorkingDays1<NUM_OF_WORKING_DAYS1)
{
    totalWorkingDays1++;
    var empCheck=Math.floor(Math.random()*10)%3;
    empHrs=getWorkinghours(empCheck);
    totalEmpHrs1+=empHrs;
    let dailyWage=calculateDailyWage(empHrs);
    //push the value in array
    employeeWageArray.push(dailyWage);
     //set the value in map
    employeeWageMap.set(totalWorkingDays1,dailyWage);
    //set the value in map
    employeeHourMap.set(totalWorkingDays1,empHrs);
//object creation-->holding the data as day,dailyemphours,empwage---UC-10
empWageAndHourArray.push(
    {
        Day:totalWorkingDays1,
        DailyEmpHrs:empHrs,
        DailyEmpWage:dailyWage,
        //tostring mthod to print the data
        toString()
        {
            return "Day: "+this.Day+ " Working hours: "+this.DailyEmpHrs + " Daily Emp Wage : "+this.DailyEmpWage+"\n";
        }
    }
    );
}
console.log("UC-10-->Showing daily hours worked and employee wage : "+empWageAndHourArray);
console.log("UC6-->Total days : " +totalWorkingDays1 + " Total Hrs: " +totalEmpHrs1 + " Emp wage " +empWage3);
                             //UC7--Array Helper Function
let totalEmpWage1=0;
function sum(dailyWage)
{
    totalEmpWage1+=dailyWage;
}
//using foreach--->UC-7A
employeeWageArray.forEach(sum);
console.log("UC-7A-using foreach helper method "+totalEmpWage1);
//get total wage funtion for using reduce method
function getTotalWage(total,dailyWage)
{
    return total+dailyWage;
}
//using reduce method--->UC-7A
console.log("UC-7A-using reduce helper method "+employeeWageArray.reduce(getTotalWage,0));
//UC-7B
let dayCount=0;
//function to count the day and dailwage
function generateMap(dailyWage)
{
    dayCount++;
    return "Day "+dayCount+ ":"+dailyWage;
}
//Using map method in array
let dayCountAndDailyWage=employeeWageArray.map(generateMap);
console.log("UC-7B Map method using array " +dayCountAndDailyWage.join(" "));
//function-->to get only full time employee using includes
function fullTimeWage(dailyWage)
{
return dailyWage.includes("160");
}
//filter method-->UC-7C
let fullTimeEmployee=dayCountAndDailyWage.filter(fullTimeWage);
console.log("UC-7C--Filter method to get only full time employee "+fullTimeEmployee.join(" "));

//find method to get the first occcurence of full time employee-->UC-7D
let findFirstOccurenceOfFullTimeEmp=fullTimeEmployee.find(fullTimeWage);
console.log("UC-7D--Using find method to find first occurence of full time employee " +findFirstOccurenceOfFullTimeEmp);

//check the fulltimeemployee array whether it contains fulltime(160) or not-->UC-7E
let checkFullTimeEmp=fullTimeEmployee.every(fullTimeWage);
console.log("UC-7E--Check all the elements whether it is fulltime or not : " +checkFullTimeEmp);

//UC-7F
function partTimeWage(dailyWage)
{
return dailyWage.includes("80");
}
let checkPartTimeEmp=dayCountAndDailyWage.some(partTimeWage);
console.log("UC-7F-->Check if atleast part time employee is present or not "+checkPartTimeEmp);
//UC-7G-->Number of days employee worked
let workingDay=0
function numOfDaysWorked(numberOfDays,dailWage)
{
    if(dailWage>0)
    {
        workingDay++;
    }
 return workingDay;
}

console.log("UC-7G-->Number of days employee worked : "+employeeWageArray.reduce(numOfDaysWorked,0));
//UC-7G-->display the map
for (let [key,value] of employeeWageMap)
{
    console.log("Key : "+key+"\t" + "Value : "+value);
}
console.log("Totalwage using Map "+Array.from(employeeWageMap.values()).reduce(getTotalWage,0));
console.log("***Employee hour map***")
//print the employee hour map
for (let [key,value] of employeeHourMap)
{
    console.log("Key : "+key+"\t" + "Value : "+value);
}
//UC-9A
//creating a arrow function for calculating totalwage
let totalWageMap=(total,dailWage)=>
{
    return total+dailWage;
}
let totalWageUsingMap=Array.from(employeeWageMap.values()).filter(x=>x>0).reduce(totalWageMap,0);

let totalEmpHrsUsingMap=Array.from(employeeHourMap.values()).reduce(totalWageMap,0);

console.log("UC-9A-->Total wage using Map:"+totalWageUsingMap+ " Total Employee Hours using map "+totalEmpHrsUsingMap);
//UC-9B-->creating a array for fulltime,parttime and no working day
let fullTime=new Array();
let partTime=new Array();
let noWorkingDay=new Array();
employeeHourMap.forEach((value,key,map)=>
{
    console.log("Key : "+key+"\t" + "Value : "+value);
    if(value==8)
        fullTime.push(8);
    
    else if(value==4)
        partTime.push(4);
  
    else   
        noWorkingDay.push(0);
});

console.log("UC-9B-->Full time working days "+fullTime);
console.log("UC-9B-->part time working days "+partTime);
console.log("UC-9B-->no working days "+noWorkingDay);