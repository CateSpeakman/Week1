"use strict"

//Description: This script will display different greetings based on time of day.
//Author: Cate Speakman

var currentHour = 15;

if (currentHour < 9)
  {
    console.log("Good morning!");
  }  
else if (currentHour < 16)
{
    console.log("Good day!");
}
     
else 
{
    console.log("Good evening!");
}

