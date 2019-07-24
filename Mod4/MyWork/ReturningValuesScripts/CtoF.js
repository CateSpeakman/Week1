"use strict";

//Description: This script will contain a function to convert Celsius temperatures to Fahrenheit.
//Author: Cate Speakman

function convertCtoF(currentTemp)
{
    var FarTemp = (currentTemp * 1.8) + 32;
    return FarTemp;
}

var currentTemp =0;
var FarTemp = convertCtoF(currentTemp);

console.log (currentTemp + "C = " + FarTemp + "F");

