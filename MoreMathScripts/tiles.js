"use strict"

//Description: This script will calculate the number of boxes of tiles
//             need for installation.
//Author: Cate Speakman

var floorLength = 10;
var floorWidth = 8;
var floorArea = floorLength * floorWidth;
var numberTiles = Math.ceil((floorArea * 1.1) /12);
var totalBoxes = Math.ceil(floorArea /12);

console.log ("The number of boxes needed to tile a " + floorLength + " X " + floorWidth + " room is " + totalBoxes);
