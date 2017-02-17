// Data and variable declarations
var timer; //start/stop the timer using this -- clearInterval
var minutesLeft = 0;
var secondsLeft = 5;
var isOnBreak = false;
var numberOfBreaks = 0;

// Getting references from the DOM
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var startButton = document.querySelector('#start');
var stopButton = document.querySelector('#stop');
var resetButton = document.querySelector('#reset');

// Initialization code
  //eventListeners
  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', stop);
  // resetButton.addEventListener('click', reset);
  render();

// Function Definitions
function start(){
  console.log(timer);
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
  if(secondsLeft === 0 && minutesLeft === 0){
    clearInterval(timer);
    timer = null; //dereference
    if(isOnBreak){
      numberOfBreaks += 1;
      resetWorkTime();
    } else {
      resetBreakTime();
    }
    isOnBreak = !isOnBreak;
    render();
    return;
  }
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

function resetWorkTime(){
  minutesLeft = 0;
  secondsLeft = 05;
}

function resetBreakTime(){
  if(numberOfBreaks < 3){
    minutesLeft = 5;
  } else {
    minutesLeft = 15;
    numberOfBreaks = 0;
  }
  secondsLeft = 0;
}
