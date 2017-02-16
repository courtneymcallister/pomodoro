// Data and variable declarations
var timer; //start/stop the timer using this -- clearInterval
var minutesLeft = 25;
var secondsLeft = 0;
var isOnBreak = false;
var numberOfBreaks = 0;

// Getting references from the DOM
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var startButton = document.querySelector('#start');

// Initialization code
  //eventListeners
  startButton.addEventListener('click', start);

// Function Definitions
function start(){
  if(!timer){
    timer = setInterval(tick, 1000);
  }
}

function tick(){
  console.log('tick');
}

function render(){}
