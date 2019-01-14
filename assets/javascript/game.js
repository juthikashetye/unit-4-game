var goal = null;
var myScoreCounter = 0; 
var winCounter = 0;
var lossCounter = 0;

function displayCountersOnScreen (){
	$("#goalnumber").html(goal);
	$("#score").html(myScoreCounter);
	$("#wins").html(winCounter);
	$("#losses").html(lossCounter);
}

function getUniqueCrystalValue(jewels, currIndex){
	var crystalVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;	
	for (var i = currIndex - 1; i >= 0; i--) {
		if (jewels[i].data("crystalvalue") == crystalVal){
			return getUniqueCrystalValue(jewels, currIndex);
		}
	}
	return crystalVal;
}

function assignCrystalValue(){
	var arrayOfJewels = [$('#blue'),$('#green'),$('#red'),$('#yellow')];
	for (var i = 0; i < arrayOfJewels.length; i++) {
		var crystalValue = getUniqueCrystalValue(arrayOfJewels,i);
 		arrayOfJewels[i].attr("data-crystalvalue", crystalValue);
	}
}

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
 	myScoreCounter = 0; 
 	displayCountersOnScreen ();
 	assignCrystalValue();	
}

reset();