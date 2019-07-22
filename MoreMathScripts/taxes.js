"use strict"

//Description: This script calculates the federal taxes on a monthly salary.
//Author: Cate Speakman

var salary = 1000;
var taxRate= .23;
var tax = salary * taxRate;
tax = parseFloat(tax .toFixed(2));

console.log("The federal taxes on " + salary + " monthly salary" + " is " + tax)