var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var crystalValue = null;
var myScoreCounter = 0; 
var winCounter = 0;
var lossCounter = 0;

$("#goalnumber").html(goal);
$("#score").html(myScoreCounter);
$("#wins").html(winCounter);
$("#losses").html(lossCounter);

function assignCrystalValue(){
	var arrayOfJewels = [$('#blue'),$('#green'),$('#red'),$('#yellow')];
	for (var i = 0; i < arrayOfJewels.length; i++) {
		crystalValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
 		arrayOfJewels[i].attr("data-crystalvalue", crystalValue);
	}
}
assignCrystalValue();

$(".jewelImage").on("click", function (){
	var clickedJewelValue = ($(this).attr("data-crystalvalue"));
		clickedJewelValue = parseInt(clickedJewelValue);
	myScoreCounter += clickedJewelValue;
	$("#score").html(myScoreCounter);

	if (myScoreCounter === goal) {
		winCounter ++;
		$("#wins").html(winCounter);
		reset();

	}else if (myScoreCounter > goal) {
		lossCounter ++;
		$("#losses").html(lossCounter);
		reset();
	}

});

function reset (){
	goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
 	crystalValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
 	myScoreCounter = 0; 
 	assignCrystalValue();
 	$("#goalnumber").html(goal);
	$("#score").html(myScoreCounter);	
}
