"use strict";

//Description: This script will contain a function to convert Fahrenheit temperatures to Celsius.
//Author: Cate Speakman

function convertFtoC(currentTemp)
{
    var celsiusTemp = (currentTemp -32) /1.8;
    return celsiusTemp;
}

var currentTemp =32;
var celsiusTemp = convertFtoC(currentTemp);

console.log (currentTemp + "F = " + celsiusTemp + "C");

