//If Statement
//UC1
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

//UC2
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
        break;
        case FULL_TIME:
            empHrs=FULL_TIME_HRS1;
            console.log("UC3--->Full time employee :" +empHrs);
            break;
            default:
                empHrs=0;
                console.log("UC3--->Employee is absent " +empHrs);
}
}
let empHrs1=0;
let empWage1=0;
empHrs1=getWorkinghours(empCheck);
empWage1=empHrs*WAGE_PER_HR1;
console.log("UC3--->Emp Wage : "+empWage1);
}

