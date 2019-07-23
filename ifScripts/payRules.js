"use strict"

//Description: This script will calculate total gross pay for regular 40 hours and overtime hours.
//Author: Cate Speakman

var payRate = 10;
var hoursWorked = 41;
var regPay = (hoursWorked * payRate);
var totalPay;

if (hoursWorked >40)
{
    var otHours = (hoursWorked - 40);
    var otRate = (payRate * .5);
    var otPay = (otHours * otRate);
    totalPay = (regPay + otPay);
}
else
{
    totalPay = (regPay);
}

console.log(totalPay);