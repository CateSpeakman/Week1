"use strict";

//Description: this script will convert fahrenheit temperatures to celsius.
//Author: Cate Speakman

function convertftoc()
{
    let fahrenheitTemp= document.getElementById("fahrenheitTemp").value;
    fahrenheitTemp = Number(fahrenheitTemp);

    let convertedCelsius = (fahrenheitTemp -32) / 1.8;
    
    document.getElementById("convertedCelsius").value = convertedCelsius;
   
}

function init()
{
    const fahrenheitBtn = document.getElementById("fahrenheitBtn");
    fahrenheitBtn.onclick = convertftoc;
}

window.onload = init;