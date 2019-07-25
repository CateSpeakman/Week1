"use strict";

//Description: This script will contain 3 functions regarding pay withholdings for Social Security, Medicare,
//              and Federal Taxes.
//Author: Cate Speakman

//The below function will calculate the social security tax 


function getSocSecTax(grossPay)
{

    var socSecTax = grossPay * .062;
    return socSecTax;
}


//the below function will calculate the medicare tax
function getMedicareTax(grossPay)
{
    
    var medicareTax = grossPay * .0145;
    return medicareTax;
}

//the below function will calculate the federal taxes.

function getFederalTax (grossPay, withholdCode)
{
    var taxRate;
  
    switch (withholdCode)
    {
        case 0:
            taxRate = .23;
            break;
        case 1:
            taxRate = .21;
            break;
        case 2:
            taxRate = .195;
            break;
        case 3:
            taxRate = .185;
            break;
        default:
            taxRate = .18;
            break;
    }

    var federalTax = grossPay * taxRate;
    return federalTax;

}
var grossPay = 1000;
var withholdCode = 1;
var socSecTax = getSocSecTax(grossPay);
var medicareTax = getMedicareTax(grossPay);
var federalTax = getFederalTax(grossPay, withholdCode);

console.log("If the gross pay is " + grossPay + 
            ", the social security tax is " + socSecTax + 
            ", the medicare tax is " + medicareTax +
            ", and the federal tax rate is " + federalTax);
