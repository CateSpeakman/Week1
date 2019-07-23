"use strict"

//Description: This script will calculate the cost of the van rentals
//              based on 15 passengers per van, van cost at $250 per van.
//Author: Cate Speakman

var passengers = 38;
var vanCost = 250;
var numVans = Math.ceil(passengers/15);
var total_cost = numVans * vanCost;
var people_cost = Math.round(total_cost / passengers);

console.log ("The total cost of the vans for " + passengers + " passengers " + " is " + total_cost);
console.log ("The cost per person is " + people_cost);