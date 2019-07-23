"use strict"

//Description:This script will look up a student's major code and display the name of the major and location
//            of the department's office along with the student's name.
//Author: Cate Speakman

//user input
var studentName ="Betty";
var studentMajor = "CS";

//calculations
var majorName;
var deptLocation;

if (studentMajor == "BIOL")
{
    majorName = "Biology";
    deptLocation = "Science Bldg, Room 310";
}
else if (studentMajor == "CSCI")
{
    majorName = "Computer Science";
    deptLocation = "Sheppard Hall, Room 314";
}
else if (studentMajor =="ENG")
{
    majorName = "English";
    deptLocation = "Kerr Hall, Room 201";
}
else if (studentMajor == "HIST")
{
    majorName = "History";
    deptLocation = "Kerr Hall, Room 114"
}
else if (studentMajor == "MKT")
{
    majorName = "Marketing";
    deptLocation = "Westly Hall, Room 310"
}
else 
{
    majorName = "Unknown";
    deptLocation = "";
}
console.log("Student: " + studentName + "\nMajor: " + majorName + "\nAdvising Location: " + deptLocation);