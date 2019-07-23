"use strict"

//Description: This script will determine if a given year is a leap year.
//Author: Cate Speakman

var testYear= 1900;
var leapYear;

if (testYear %4 == 0)
{
    if (testYear %100 == 0)
    {
        if (testYear %400 == 0)
        {
        leapYear = true;
        }
        else 
        {
        leapYear = false;
        }
    }
    else 
    { 
    leapYear = true;
    }

}
else 
{
    leapYear = false;
}

console.log (leapYear);