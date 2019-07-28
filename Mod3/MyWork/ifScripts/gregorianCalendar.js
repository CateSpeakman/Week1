"use strict";

//Description: This script will determine whether a given year is a leap year in the Gregorian
//              calendar.
//Author: Cate Speakman

var currentYear= 1900;
var leapYear;

if (currentYear %4 == 0)
{
    if (currentYear %100 == 0)
    {
        if (currentYear %400 ==0)
        {
            leapYear="yes";
        }

        else
        {
            leapYear="no";
        }
    }

    else
    {
        leapYear = "no";
    }
}

else
{
    leapYear = "no";
}

console.log(leapYear);