var points = 0;
var numberOfShots = 0;
var numberOfTwos = 0;
var numberOfThrees = 0;
var blocks = 0;
var rebounds = 0;
var assists = 0;
var steals = 0;
var fouls = 0;
var freeThrows = 0;
var freeThrowMade = 0;

$("#shotsTaken").click(function(){
	numberOfShots++;
	$('#shots').html(numberOfShots);
});

$("#twoPts").click(function(){
	numberOfShots++;
	numberOfTwos++;
	points = points + 2 ;
	$('#shots').html(numberOfShots);
	$('#twoPoints').html(numberOfTwos);
	$('#points').html(points);
});

$("#threePts").click(function(){
	numberOfShots++;
	numberOfThrees++;
	points= points + 3;
	$('#shots').html(numberOfShots);
	$('#threePoints').html(numberOfThrees);
	$('#points').html(points);
});

$("#freeThrowsMade").click(function(){
	freeThrowMade++;
	freeThrows++;
	points++;
	$('#missedFreeThrows').html(freeThrows);
	$('#freeThrowPts').html(freeThrowMade);
	$('#points').html(points);
});
$("#freeThrowsMiss").click(function(){
	freeThrows++;
	$('#missedFreeThrows').html(freeThrows);
});
$("#blocks").click(function(){
	blocks++;
	$('#bl').html(blocks);
});
$("#assists").click(function(){
	assists++;
	$('#as').html(assists);
});
$("#rebounds").click(function(){
	rebounds++;
	$('#rb').html(rebounds);
});
$("#steals").click(function(){
	steals++;
	$('#st').html(steals);
});
$("#fouls").click(function(){
	fouls++;
	$('#fl').html(fouls);
});