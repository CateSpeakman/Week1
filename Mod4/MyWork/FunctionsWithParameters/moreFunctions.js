"use strict";

//Description: This script will contain a couple of functions to include using parameters.
//Author: Cate Speakman

//The below function will display mailing labels.

function displayMailingLabel(name, address, city, state, zip)
{
    var message = name + " " + address + " " + city + " " + state + " " + zip;
    console.log (message);
}

var name = "Cate Speakman";
var homeAddress = "13 Meadow Lane";
var homeCity = "Barnet";
var homeState = "VT";
var homeZip = "05821";

displayMailingLabel(name, homeAddress, homeCity, homeState, homeZip);


//The below function will take in 2 numbers and the display will show the sum of the numbers 
// along with

function addNumbers(num1, num2)
{
    var message = (num1 + num2);
    console.log (message);
}

var someNumber1