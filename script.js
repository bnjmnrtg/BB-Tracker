var points = 0;
var numberOfShots = 0;
var numberOfTwos = 0;
var numberOfThrees = 0;
var blocks = 0;
var rebounds = 0;
var assists = 0;
var steals = 0;
var fouls = 0;

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
	console.log(numberOfShots);
	$('#shots').html(numberOfShots);
	$('#threePoints').html(numberOfThrees);
	$('#points').html(points);
});


