//UC7 - to calculate total wage and daily wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
           return PART_TIME_HOUR;
            break;
        case IS_FULL_TIME:  
            return FULL_TIME_HOUR;
            break;
        default:
            return 0;
    }
}


function calculateWage(empHrs) {
    return WAGE_PER_HOUR * empHrs;
}
let totalEmpHrs = 0;
let toatlWorkingDays = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && toatlWorkingDays < NUM_OF_WORKING_DAYS) {
    toatlWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calculateWage(empHrs))
}
let EmpWage =calculateWage(totalEmpHrs);
console.log("EMPLOYEE HOURS IS : "+totalEmpHrs+" hr\nAND TOTAL WORKING DAYS : " + toatlWorkingDays + "\nAND EMPLOYEE WAGE IS : " + EmpWage);
let totalEmpWage = 0;


function sum(dailyWage) {
    return totalEmpWage += dailyWage; 
}
empDailyWageArr.forEach(sum);
console.log("\nCALCULATING TOTAL WAGE BY FOREACH METHOD : ")
console.log("EMPLOYEE HOURS IS : "+totalEmpHrs+" hr\nAND TOTAL WORKING DAYS : " + toatlWorkingDays + "\nAND EMPLOYEE WAGE IS : " + totalEmpWage);


function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("TOTAL EMPLLOYEE WAGE(REDUCE METHOD): " + empDailyWageArr.reduce(totalWages, 0) );
let dailyCounter = 0;


function mapDayWithWage(dailyWage) {
    dailyCounter ++;
    return "Day-" + dailyCounter + "-Wage is = "+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("DAILY WAGE MAP :");
console.log(mapDayWithWageArr);

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fulltimeArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("DAILY WAGE WHEN FULL TIME WAS EARNED");
console.log(fulltimeArr);
console.log("FIRST FULL TIME WAGE WAS EARNED: ");
console.log(mapDayWithWageArr.find(fulltimeWage));

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("CHECKING ALL FULL TIME WAGE ELEMENTS:-")
console.log(fulltimeArr.every(isAllFulltimeWage));


function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("CEHCKING IF ANY PART TIME WAGE :");
console.log(mapDayWithWageArr.some(isAnyPartTimeWage));


function totalDaysworked(numOfDays, dailyWage) {
    if (dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("NUMBER OF DAYS THE EMPLOYEE WORKED:")
console.log(empDailyWageArr.reduce(totalDaysworked, 0));
