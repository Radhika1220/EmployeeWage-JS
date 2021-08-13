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
//Creating a array
let employeeWageArray=new Array();
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
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    var empCheck=Math.floor(Math.random()*10)%3;
    empHrs=getWorkinghours(empCheck);
    totalEmpHrs+=empHrs;
    totalWorkingDays++;
    employeeWageArray.push(calculateDailyWage(empHrs));
}
console.log("UC6-->Total days : " +totalWorkingDays + " Total Hrs: " +totalEmpHrs + " Emp wage " +empWage3);