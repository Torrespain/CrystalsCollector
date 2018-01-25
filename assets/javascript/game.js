$(document).ready(function(){
var wins=0;
var looses=0;
var randomNumber="";
var cr1Value=0;
var cr2Value=0;
var cr3Value=0;
var cr4Value=0;
var actualScore=0;

function initiate(){
	wins=0;
	looses=0;
	randomNumber="";
	restart();
}
initiate();

function restart(){
	actualScore=0;
	$("#actualScore").text(actualScore);
	random();
	cr1Value=randomCrystal();
	cr2Value=randomCrystal();
	cr3Value=randomCrystal();
	cr4Value=randomCrystal();
	console.log(cr1Value);
	console.log(cr2Value);
	console.log(cr3Value);
	console.log(cr4Value);
}

function compare(){
	if (randomNumber===actualScore) {
		wins++;
		restart();
	}
	else if(actualScore>randomNumber){
		looses++;
		restart();
	}
	$("#wins").text(wins);
	$("#looses").text(looses);
}

function random(){
randomNumber=Math.floor((Math.random()*102)+19);
$("#targetScore").text(randomNumber);
console.log(randomNumber);
}

function randomCrystal(){
return(Math.floor((Math.random()*12)+1));
}

$("#crystal1").on("click", function(){
	actualScore=cr1Value+actualScore;
	$("#actualScore").text(actualScore);
	compare()
});

$("#crystal2").on("click", function(){
	actualScore=cr2Value+actualScore;
	$("#actualScore").text(actualScore);
	compare()
});

$("#crystal3").on("click", function(){
	actualScore=cr3Value+actualScore;
	$("#actualScore").text(actualScore);
	compare()
});

$("#crystal4").on("click", function(){
	actualScore=cr4Value+actualScore;
	$("#actualScore").text(actualScore);
	compare()
});

});