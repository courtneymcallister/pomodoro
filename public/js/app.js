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
var stopButton = document.querySelector('#stop');

// Initialization code
  //eventListeners
  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', stop);
  render();

// Function Definitions
function start(){
  if(!timer){
    timer = setInterval(tick, 1000);
  }
}

function stop(){
  if(timer){
    timer = clearInterval(timer);
  }
}

function tick(){
  decrementMinutes();
  decrementSeconds();
  render();
}
function decrementMinutes(){
  if(secondsLeft === 0){
    minutesLeft -= 1;
  }
}
function decrementSeconds(){
  if(secondsLeft === 0){
    secondsLeft = 59;
  } else {
    secondsLeft -= 1;
  }
}

function render(){
  minutes.textContent = pad(minutesLeft);
  seconds.textContent = pad(secondsLeft);
}

function pad(num){
  if(num < 10){
    return `0${num}`;
  } else {
    return num;
  }
}
