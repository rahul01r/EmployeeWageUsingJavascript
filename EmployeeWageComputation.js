const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;

let empHrs = 0
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
function getworkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
        default:
            return 0;
    }
}
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && 
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHrs += getworkingHours(empCheck);
            totalEmpHrs += empHrs;
            empDailyWageArr.push(calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days : " +totalWorkingDays+ "\tTotal Hours: "+totalEmpHrs+ "\tEmployee Wage: "+empWage);


// Array Helper Function 
let totEmpWage =0;
function sum (dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days :"+totalWorkingDays + "Total Hrs :" +totalEmpHrs + " Emp Wage: " + totEmpWage );
function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A- Emp Wage With reduce :" + empDailyWageArr.reduce(totalWages, 0));


//UC 9 Arrrow Function
const findtotal = (tatalVal, dailyVal) => {
    return tatalVal + dailyVal;
}
let count = 0;
let empDailyHrsMap = new Array();
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findtotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findtotal,0);
console.log("UC9 Emp Wage With Arrow.: "+"Total Hours: "+ totalHours + "Total wages :" +totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach ((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);