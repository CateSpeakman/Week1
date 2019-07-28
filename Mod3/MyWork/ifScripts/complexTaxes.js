"use strict";

//Description: This cript will determine the tax rate based on filing status and income range.
//Author: Cate Speakman

var filingStatus = "single";
var income = 80000;
var taxRate;

if (filingStatus == "single" && income <12000)
{
    taxRate ="5%";
}

else if (filingStatus=="single" && income<25000)
{
    taxRate="10%";
}

else if (filingStatus=="single" && income<75000)
{
    taxRate="15%";
}

else if (filingStatus == "joint" && income <12000)
{
    taxRate ="0";
}

else if (filingStatus=="joint" && income<25000)
{
    taxRate="6%";
}

else if (filingStatus=="joint" && income<75000)
{
    taxRate="11%";
}

else
{
    taxRate="20%";
}

console.log(taxRate);