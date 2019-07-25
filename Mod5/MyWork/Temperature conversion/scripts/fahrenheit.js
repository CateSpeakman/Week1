"use strict";

//Description: this script will convert celsius temperatures to fahrenheit.
//Author: Cate Speakman

function convertctof()
{
    let celsiusTemp= document.getElementById("celsiusTemp").value;
    celsiusTemp = Number(celsiusTemp);

    let convertedFahrenheit = (celsiusTemp * 1.8) + 32;
    
    document.getElementById("convertedFahrenheit").value = convertedFahrenheit;

}

function init()
{
    const celsiusBtn = document.getElementById("celsiusBtn");
    celsiusBtn.onclick = convertctof;
}

window.onload = init;