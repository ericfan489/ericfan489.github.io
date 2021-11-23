//Eric Fan
// File: reference.js
// GUI Assignment 3: Creating a dynamic Multiplication Table
// Eric Fan, UMass Lowell Computer Science, eric_fan@student.uml.edu
// Copyright (c) 2021 by Eric. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by EF on November 19, 2021 at 8:43 PM

var tabIndex = 1;
document.getElementById("submit").addEventListener("click",add_tab);
document.getElementById("delete_tabs").addEventListener("click",delete_tabs);
function delete_tabs(){
    //Count the number of tabs
    var tabCount = $("#tabs li").length + 1;
    // if there are no tabs return
    if(tabCount <= 0) {
        return false;
    }

    // loop through all the tabs and delete the divs
    for(let i = 1; i <= tabIndex; i++){
        $( "#tab-"+i ).remove();
        $( "#tabs" ).tabs().tabs( "refresh" );
    }
    // remove the list items in the tabs
    $("#tabs li").remove();
    $( "#tabs" ).tabs().tabs( "refresh" );
    tabIndex = 1;
}
function add_tab() {  
    if($("#input_form").valid() == false){
        return;
    }
    var tabCount = $("#tabs li").length + 1;
      
    //I decided to set the max as 30 tabs
    if(tabCount > 30) {
        alert("Sorry, only 30 tables can be saved at the same time. Please delete one table to save another.");
        return false;
    }
      
    // This should make the tabs 
    $( "#tabs" ).tabs();
      
    // -50 to 50 (horizontal beginning to end) by -50 to 50 (vertical beginning to end)
    var hor_start = parseInt(document.getElementById('first').value);
    var hor_end = parseInt(document.getElementById('second').value);
    var vert_start = parseInt(document.getElementById('third').value);
    var vert_end = parseInt(document.getElementById('fourth').value);
      
    //Make sure the titles of the tabs are correct
    if (hor_start > hor_end && vert_start > vert_end){
        var temp = hor_start;
        hor_start = hor_end;
        hor_end = temp;

        temp = vert_start;
        vert_start = vert_end;
        vert_end = temp;
    }else if (vert_start > vert_end){
        var temp = vert_start;
        vert_start = vert_end;
        vert_end = temp;
    }else if (hor_start > hor_end){
        var temp = hor_start;
        hor_start = hor_end;
        hor_end = temp;
    }
    // Increment the tab index everytime we create a new one
    tabIndex++;
      
    // Create a temp variable title which will be used as the title for the tab1
    var title = "<li><a href='#tab-" + tabIndex + "'>" + hor_start +
                " to " + hor_end + " by " + vert_start + " to " + vert_end + "</a>" +
                "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";
      
    // append the title to the list of tab titles
    $( "#tabs ul" ).append( title );
      
    // Add the multiplication table to the tab
    $( "#tabs" ).append('<div id="tab-' + tabIndex + '"class="scrollable" style="overflow:auto">' + $("#output").html() + '</div>');
      
    // Refresh the tabs so the new tab will be visible
    $( "#tabs" ).tabs("refresh");
    $( "#tabs" ).tabs("option", "active", -1);


    // Add and x button to each tab
    // Got this function from https://jqueryui.com/tabs/#manipulation
    $( "#tabs" ).tabs().on( "click", "span.ui-icon-close", function() {
        var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        $( "#tabs" ).tabs().tabs( "refresh" );
    });
}; 

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