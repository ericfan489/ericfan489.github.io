//Eric Fan
// File: reference.js
// GUI Assignment 3: Creating a dynamic Multiplication Table
// Eric Fan, UMass Lowell Computer Science, eric_fan@student.uml.edu
// Copyright (c) 2021 by Eric. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by EF on November 19, 2021 at 8:43 PM

//Make the function get called when user clicks on submit button
document.getElementById("submit").addEventListener("click",generate_table);
function generate_table(){
    //Check if all inputs are valid inputs
    if($("#input_form").valid() == false){
        return;
    }
    //initialize the user inputs as variables
    var column_min = parseInt(document.getElementById("first").value);
    var column_max = parseInt(document.getElementById("second").value);
    var row_min = parseInt(document.getElementById("third").value);
    var row_max = parseInt(document.getElementById("fourth").value);
    

    //display error message if min is greater then the max then switch the values
    var error = document.getElementById("error");
    if (column_min > column_max && row_min > row_max){
        error.innerText = "Switching the max column and min column \n Switching the max row and min row";
        var temp = column_min;
        column_min = column_max;
        column_max = temp;

        temp = row_min;
        row_min = row_max;
        row_max = temp;
    }else if (column_min > column_max){
        error.innerText = "Switching the max column and min column";
        var temp = column_min;
        column_min = column_max;
        column_max = temp;
    }else if (row_min > row_max){
        error.innerText = "Switching the max row and min row";
        var temp = row_min;
        row_min = row_max;
        row_max = temp;
    }else{
        error.innerText = "";
    }

    //Create the first row of the table
    var content = "<table><thead><tr><td id='blank'></td>";
    for (let count = column_min; count <= column_max; count++){
        content += "<th>" + count + "</th>";
    }
    content+="</tr></thead>";
    var temp2 = row_min;

    //Create the rest of the table by looping through the values
    for (let count = row_min; count <= row_max; count++){
        content += "<tr><th>";
        content += temp2 +"</th>";
        temp2++;
        for(rows = column_min; rows<=column_max;rows++){
            content +="<td>" + (count * rows)+"</td>";
        }
        content += "</tr>";
    } 
    content += "</tr></table>";
    table = document.getElementById("output");

    //put the table into the output div
    table.innerHTML = content;

}