"use strict";

function greetUser()
{
    const username = document.getElementById ("name").value;
    alert ("Hello " + username);
}

function init()
{
    const btn = document.getElementById("btn");
    btn.onclick = greetUser;
}

window.onload = init;