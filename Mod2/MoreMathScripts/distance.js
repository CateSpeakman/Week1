"use strict"

//Description: This script will calculate the distance between 2 points
//              on a graph.
//Author: Cate Speakman

var x1 = 1;
var x2 = 3;
var y1 = 4;
var y2 = 8;
var difX = x2 - x1;
var difY = y2 - y1;
var distance = Math.sqrt((Math.pow(difX,2)) + (Math.pow(difY,2)));

console.log ("The distance between (1,4) and (3,8) is " + distance);