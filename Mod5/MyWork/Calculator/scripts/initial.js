"use strict";

//Description: This script will initialize the scripts when the web page is loading.
//Author: Cate Speakman

function init()
{
    const addbtn = document.getElementById("addBtn");
    addbtn.onclick = add;

    const subtractbtn = document.getElementById("subtractBtn");
    subtractbtn.onclick = subtract;

    const multiplybtn = document.getElementById("multiplyBtn");
    multiplybtn.onclick = multiply;

    const dividebtn = document.getElementById("divideBtn");
    dividebtn.onclick = divide;
}

window.onload= init;
