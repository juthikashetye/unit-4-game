var goal = null;
var myScoreCounter = 0;
var winCounter = 0;
var lossCounter = 0;

function displayCountersOnScreen() {
  $("#goalnumber").html(goal);
  $("#score").html(myScoreCounter);
  $("#wins").html(winCounter);
  $("#losses").html(lossCounter);
}

function assignCrystalValue() {
  var arrayOfJewels = [$('#blue'), $('#green'), $('#red'), $('#yellow')];
  for (var i = 0; i < arrayOfJewels.length; i++) {
    var crystalValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    arrayOfJewels[i].attr("data-crystalvalue", crystalValue);
  }
}

$(".jewelImage").on("click", function() {
  var clickedJewelValue = ($(this).attr("data-crystalvalue"));
  clickedJewelValue = parseInt(clickedJewelValue);
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
  goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  myScoreCounter = 0;
  assignCrystalValue();
  displayCountersOnScreen();
}

start();