"use strict";

//Description: the below function will add 2 numbers when input in the fields of the calculator.
//Author: Cate Speakman

function add()
{
let firstNumber = document.getElementById("firstNumber").value;
firstNumber = Number(firstNumber);

let secondNumber = document.getElementById("secondNumber").value;
secondNumber = Number(secondNumber);

let answer = firstNumber + secondNumber;

document.getElementById("answer").value = answer;

}

function subtract()
{
let firstNumber = document.getElementById("firstNumber").value;
firstNumber = Number(firstNumber);

let secondNumber = document.getElementById("secondNumber").value;
secondNumber = Number(secondNumber);

let answer = firstNumber - secondNumber;

document.getElementById("answer").value = answer;

}


function multiply()
{
let firstNumber = document.getElementById("firstNumber").value;
firstNumber = Number(firstNumber);

let secondNumber = document.getElementById("secondNumber").value;
secondNumber = Number(secondNumber);

let answer = firstNumber * secondNumber;

document.getElementById("answer").value = answer;

}

function divide()
{
let firstNumber = document.getElementById("firstNumber").value;
firstNumber = Number(firstNumber);

let secondNumber = document.getElementById("secondNumber").value;
secondNumber = Number(secondNumber);

let answer = firstNumber / secondNumber;

document.getElementById("answer").value = answer;

}