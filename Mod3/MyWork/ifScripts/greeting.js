"use strict";

//Description: This script will display a greeting based on the current hour.
//Author: Cate Speakman

var currentHour = 10;

if (currentHour < 10)
{
    console.log("Good Morning");
}

else if (currentHour < 17)
{
    console.log("Good day");
}

else 
{
    console.log("Good evening");
}