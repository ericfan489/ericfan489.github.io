//Eric Fan
document.getElementById("submit").addEventListener("click",generate_table);
function generate_table(){
    var column_min = parseInt(document.getElementById("first").value);
    var column_max = parseInt(document.getElementById("second").value);
    var row_min = parseInt(document.getElementById("third").value);
    var row_max = parseInt(document.getElementById("fourth").value);
    
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
    var content = "<table><thead><tr><td id='blank'></td>";
    for (let count = column_min; count <= column_max; count++){
        content += "<th>" + count + "</th>";
    }
    content+="</tr></thead>";
    var temp2 = row_min;
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
    table.innerHTML = content;

}