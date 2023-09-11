var Clicks = 0; 
var button = document.getElementById("click-me");
var square = document.getElementById("square");
var Gamefield = document.getElementById("game-field");

button.addEventListener("click", function() {
  ClickCounting();
  ColorChanging();
  Rotation();
  Movement();
});

function ClickCounting() {
  Clicks = Clicks + 1;
  button.innerHTML = "Click me: " + Clicks;
}

function ColorChanging() {
  var r = RandomizeColor();
  var g = RandomizeColor();
  var b = RandomizeColor();

  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  square.style.borderColor = `rgb(${b}, ${g}, ${r})`

  function RandomizeColor() {
    return Math.floor(Math.random() * 255);
  }
}

function Movement() {
    var squareWidth = square.offsetWidth;
    var squareHeight = square.offsetHeight;
    var fieldWidth = Gamefield.offsetWidth;
    var fieldHeight = Gamefield.offsetHeight;
    var top = Math.random() * (fieldHeight - (squareHeight * 2));
    var left = Math.random() * (fieldWidth - (squareWidth * 2));
  
    if (left + squareWidth > fieldWidth) {
      left = fieldWidth - (squareWidth * 2);
    }
  
    if (top + squareHeight > fieldHeight) {
      top = fieldHeight - (squareHeight * 2);
    }
  
    if (left < 0) {
      left = 0;
    }
  
    if (top < 0) {
      top = 0;
    }
  
    square.style.top = top + 'px';
    square.style.left = left + 'px';
  }

function Rotation() {
    var degrees = RandomizeDegrees();

    square.style.rotate = `${degrees}deg` 
  
    function RandomizeDegrees() {
      return Math.floor(Math.random() * 360);
    }
  }

