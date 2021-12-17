//Eric Fan
// File: reference.js
// GUI Assignment 5: Scrabble
// Eric Fan, UMass Lowell Computer Science, eric_fan@student.uml.edu
// Copyright (c) 2021 by Eric. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by EF on December 16, 2021 at 8:23 PM


//array of all letters and their values
//Made by Ramon Meza
var pieces = [
	{"letter":"A", "value":1, "amount":9},
	{"letter":"B", "value":3, "amount":2},
	{"letter":"C", "value":3, "amount":2},
	{"letter":"D", "value":2, "amount":4},
	{"letter":"E", "value":1, "amount":12},
	{"letter":"F", "value":4, "amount":2},
	{"letter":"G", "value":2, "amount":3},
	{"letter":"H", "value":4, "amount":2},
	{"letter":"I", "value":1, "amount":9},
	{"letter":"J", "value":8, "amount":1},
	{"letter":"K", "value":5, "amount":1},
	{"letter":"L", "value":1, "amount":4},
	{"letter":"M", "value":3, "amount":2},
	{"letter":"N", "value":1, "amount":5},
	{"letter":"O", "value":1, "amount":8},
	{"letter":"P", "value":3, "amount":2},
	{"letter":"Q", "value":10, "amount":1},
	{"letter":"R", "value":1, "amount":6},
	{"letter":"S", "value":1, "amount":4},
	{"letter":"T", "value":1, "amount":6},
	{"letter":"U", "value":1, "amount":4},
	{"letter":"V", "value":4, "amount":2},
	{"letter":"W", "value":4, "amount":2},
	{"letter":"X", "value":8, "amount":1},
	{"letter":"Y", "value":4, "amount":2},
	{"letter":"Z", "value":10, "amount":1}
];

//function to generate a random number
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//function used to generate 7 random tiles and make them draggable
function generate_tiles(){
    
    //get the location of the tile holder so we can put the tiles on it
    var position = $("#tile_holder").position();

    //distances to space out the tiles
    var horizontal_distance = 50;
    var vertical_distance = 35;

    //empty the tiles div if there is anything in there
    var tiles = $("#tiles");
    tiles.empty();

    //create array to check the amounts in the array
    var letter_counts = [];
    for(let x = 0;x < 26;++x){
        letter_counts.push(0);
    }


    //loop to generate 7 random tiles
    for(let i = 0; i < 7;++i){
        var num = getRandomInt(0,26);

        //check if the amounts are correct
        while(pieces[num].amount < letter_counts[num]){
            num = getRandomInt(0,26);
        }

        //get letter at the position of the random number
        var temp = pieces[num].letter 

        // add the image of the tile to the tiles div
        tiles.append("<img id='piece"+i.toString()+"'" 
        +" src='graphics_data/Scrabble_Tiles/Scrabble_Tile_"+temp+".jpg'class='"+num+"'>");

        //use css to set the position and make it draggable
        $("#piece"+i.toString()).css("left",position.left+horizontal_distance).css("top",vertical_distance+position.top).css("position","absolute");
        $("#piece"+i.toString()).draggable({revert:"invalid",snap:".spot"}).css("height","65px").css("width","65px");
        
        //add to the horizontal distance to shift each tile over
        horizontal_distance += 80;
    }
}

$(document).ready(function(){
    generate_tiles();
    generate_droppables();
});

function move_tile($item){
    
}
function generate_droppables(){
    var position = $("#scrabble_line").position();
    var horizontal_distance = 5;
    var board = $("#droppables");
    for(let i =0; i <15; ++i){

        board.append("<div id='droppable"+i.toString()+"' class='spot'></div>");
        $("#droppable"+i.toString()).css("height","65px").css("width","65px").css("position","absolute");
        $("#droppable"+i.toString()).css("left",position.left+horizontal_distance).css("top",position.top+7);
        $("#droppable"+i.toString()).droppable({drop: function( event, ui ) {
            move_tile( ui )}});
        horizontal_distance += 75;
    }

}
$( function() {
    $("#tile_holder").droppable();
} );