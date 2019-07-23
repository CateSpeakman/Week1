"use strict"

//Description: This script will calculate the federal tax based on taxable income and filing status.
//Author: Cate Speakman

//user inputs

var grossPay = 10000;
var filingStatus = "single";
var fedTax;

if (filingStatus = "single")
{
    if (grossPay < 12000)
    {
        fedTax = (grossPay *.05)
    }
    else if (grossPay < 25000)
    {
        fedTax = (grossPay * .10)
    }
    else if (grossPay <75000)
    {
        fedTax = (grossPay * .15)
    }
    else fedTax = (grossPay *.20)
}
else if (filingStatus = "joint")
{
    if (grossPay < 12000)
    {
        fedTax = (grossPay)
    }
    else if (grossPay < 25000)
    {
        fedTax = (grossPay * .06)
    }
    else if (grossPay <75000)
    {
        fedTax = (grossPay * .11)
    }
    else fedTax = (grossPay *.20) 
}

console.log("The federal tax is " + fedTax)