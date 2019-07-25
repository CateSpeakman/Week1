"use strict";

let a = 6;
function test6()
{
    let a = 6;
    function again()
    {
        let a = 8;
        console.log(a); //First
    }
    again();
    console.log(a); //second
}

test6();
console.log(a);