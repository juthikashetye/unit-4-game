var goal = null;
var myScoreCounter = 0;
var winCounter = 0;
var lossCounter = 0;

var crystalImages = [
  "assets/images/blue.png",
  "assets/images/green.png",
  "assets/images/red.png",
  "assets/images/yellow.png",
];

function appendCrystals() {
  for (var i = 0; i < crystalImages.length; i++) {

    var buttons = $("<button>");

    var jewels = $("<img>").attr("src", crystalImages[i]);
    jewels.addClass("jewelImage");
    buttons.append(jewels);

    $(".buttonHolder").append(buttons);
  }
}

// Set text of the counters
function displayCountersOnScreen() {
  $("#goalnumber").html(goal);
  $("#score").html(myScoreCounter);
  $("#wins").html(winCounter);
  $("#losses").html(lossCounter);
}

function assignCrystalValue() {

  var arrOfCrystalValues = [];
  var minNum = 1;
  var maxNum = 12;

  // Generate unique crystal values equal to the no. of crystals on page
  while (arrOfCrystalValues.length < crystalImages.length) {

    var crystalValue = getRandomValue(minNum, maxNum);

    if (arrOfCrystalValues.indexOf(crystalValue) === -1) {

      arrOfCrystalValues.push(crystalValue);

    }
  }

  // Assign the generated crystal values to the crystals
  for (var i = 0; i < arrOfCrystalValues.length; i++) {

    $('.jewelImage').eq(i).data("crystalvalue", arrOfCrystalValues[i]);

  }
}

function addEventListener() {

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
}

function getRandomValue(lowerBound, upperBound) {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

function start() {
  var lowerLimit = 19;
  var upperLimit = 120;
  goal = getRandomValue(lowerLimit, upperLimit);
  myScoreCounter = 0;
  assignCrystalValue();
  displayCountersOnScreen();
}
appendCrystals();
addEventListener();
start();