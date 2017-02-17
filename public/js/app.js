var Timer = {
  minutesLeft: 0,
  secondsLeft: 5,
  isOnBreak: false,
  numberOfBreaks: 0,
  init: function(){
    this.cacheDom();
    this.addListeners();
    this.render();
  },
  cacheDom: function(){
    this.minutes = document.querySelector('#minutes');
    this.seconds = document.querySelector('#seconds');
    this.startButton = document.querySelector('#start');
    this.pauseButton = document.querySelector('#pause');
  },
  render: function(){
    this.minutes.textContent = this.pad(this.minutesLeft);
    this.seconds.textContent = this.pad(this.secondsLeft);
  },
  addListeners: function(){
    //.bind(this) takes the meaning of ‘this’ from addListeners and pushes that meaning into the start function
    this.startButton.addEventListener('click', this.start.bind(this));
    this.pauseButton.addEventListener('click', this.pause.bind(this));
  },
  start: function(){
    if(!this.timer){
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
  },
  pause: function(){
    if(this.timer){
      this.timer = clearInterval(this.timer);
    }
  },
  tick: function(){
    if(this.secondsLeft === 0 && this.minutesLeft === 0){
      clearInterval(this.timer);
      this.timer = null; //dereference
      if(this.isOnBreak){
        this.numberOfBreaks += 1;
        this.resetWorkTime();
      } else {
        this.resetBreakTime();
      }
      this.isOnBreak = !this.isOnBreak;
      this.render();
      return;
    }
    this.decrementMinutes();
    this.decrementSeconds();
    this.render();
  },
  decrementMinutes: function(){
    if(this.secondsLeft === 0){
      this.minutesLeft -= 1;
    }
  },
  decrementSeconds: function(){
    if(this.secondsLeft === 0){
      this.secondsLeft = 59;
    } else {
      this.secondsLeft -= 1;
    }
  },
  pad: function(num){
    if(num < 10){
      return `0${num}`;
    } else {
      return num;
    }
  },
  resetWorkTime: function(){
    this.minutesLeft = 0;
    this.secondsLeft = 05;
  },
  resetBreakTime: function(){
    if(this.numberOfBreaks < 3){
      this.minutesLeft = 5;
    } else {
      this.minutesLeft = 15;
      this.numberOfBreaks = 0;
    }
    this.secondsLeft = 0;
  },

};
Timer.init();

// Data and variable declarations
// var timer; //start/stop the timer using this -- clearInterval
// var minutesLeft = 0;
// var secondsLeft = 5;
// var isOnBreak = false;
// var numberOfBreaks = 0;

// Getting references from the DOM
// var minutes = document.querySelector('#minutes');
// var seconds = document.querySelector('#seconds');
// var startButton = document.querySelector('#start');
// var stopButton = document.querySelector('#stop');
// var resetButton = document.querySelector('#reset');

// Initialization code
  //eventListeners
  // startButton.addEventListener('click', start);
  // stopButton.addEventListener('click', stop);
  // resetButton.addEventListener('click', reset);
  // render();

// Function Definitions
// function start(){
//   console.log(timer);
//   if(!timer){
//     timer = setInterval(tick, 1000);
//   }
// }

// function stop(){
//   if(timer){
//     timer = clearInterval(timer);
//   }
// }

// function tick(){
//   if(secondsLeft === 0 && minutesLeft === 0){
//     clearInterval(timer);
//     timer = null; //dereference
//     if(isOnBreak){
//       numberOfBreaks += 1;
//       resetWorkTime();
//     } else {
//       resetBreakTime();
//     }
//     isOnBreak = !isOnBreak;
//     render();
//     return;
//   }
//   decrementMinutes();
//   decrementSeconds();
//   render();
// }
// function decrementMinutes(){
//   if(secondsLeft === 0){
//     minutesLeft -= 1;
//   }
// }
// function decrementSeconds(){
//   if(secondsLeft === 0){
//     secondsLeft = 59;
//   } else {
//     secondsLeft -= 1;
//   }
// }

// function render(){
//   minutes.textContent = pad(minutesLeft);
//   seconds.textContent = pad(secondsLeft);
// }

// function pad(num){
//   if(num < 10){
//     return `0${num}`;
//   } else {
//     return num;
//   }
// }

// function resetWorkTime(){
//   minutesLeft = 0;
//   secondsLeft = 05;
// }
//
// function resetBreakTime(){
//   if(numberOfBreaks < 3){
//     minutesLeft = 5;
//   } else {
//     minutesLeft = 15;
//     numberOfBreaks = 0;
//   }
//   secondsLeft = 0;
// }
