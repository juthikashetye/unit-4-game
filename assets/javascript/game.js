var goal = null;
var myScoreCounter = 0;
var winCounter = 0;
var lossCounter = 0;

// Set text of the counters
function displayCountersOnScreen() {
  $("#goalnumber").html(goal);
  $("#score").html(myScoreCounter);
  $("#wins").html(winCounter);
  $("#losses").html(lossCounter);
}

function assignCrystalValue() {
  var arrayOfJewels = [$('#blue'), $('#green'), $('#red'), $('#yellow')];
  var arrayOfCrystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // Formula for shuffling array of crystalValues
  var crystalValue = arrayOfCrystalValues.sort(function(a, b) {
    return 0.5 - Math.random();
  });

  // Iterate through the jewels and assign unique crystal value
  // to each of the 4 jewels according to 
  // the shuffled arrayOfCrystalValues' first 4 indexes
  for (var i = 0; i < arrayOfJewels.length; i++) {

    arrayOfJewels[i].data("crystalvalue", crystalValue[i]);

  }
}

$(".jewelImage").on("click", function() {
  var clickedJewelValue = parseInt($(this).data("crystalvalue"));
  // Add the values of data-crystalvalues of clicked jewels
  // to your score
  myScoreCounter += clickedJewelValue;
  $("#score").html(myScoreCounter);

  if (myScoreCounter === goal) {
    winCounter++;
    $("#wins").html(winCounter);
    start();

  } else if (myScoreCounter > goal) {
    lossCounter++;
    $("#losses").html(lossCounter);
    start();
  }

});

function start() {
  var upperBound = 120;
  var lowerBound = 19;
  goal = Math.floor(Math.random() * (upperBound-lowerBound+1)) + lowerBound;
  myScoreCounter = 0;
  assignCrystalValue();
  displayCountersOnScreen();
}

start();