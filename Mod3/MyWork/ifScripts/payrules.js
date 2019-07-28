"use strict";

//Description:  This script will calculate gross pay given the pay rate and hours worked, 
//              including overtime hours.
//Author: Cate Speakman

var payRate=10;
var hoursWorked=41;
var totalPay;

if (hoursWorked <= 40)
{
    totalPay = payRate * hoursWorked;
}

else if (hoursWorked > 40)

{
    totalPay= ((payRate *40) + ((hoursWorked -40)*(payRate*1.5)));
}

console.log(totalPay);