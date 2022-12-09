/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40
  }

  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;

  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    //console.log(event.which);

    if (event.which === 37) {
      //console.log("left pressed");
      speedY = -5;
    }
    else if (event.which === 38) {
      //console.log("up pressed");
      speedX = -5;
    }
    else if (event.which === 39) {
      //console.log("right pressed");
      speedY = 5;
    }
    else if (event.which === 40) {
      //console.log("down pressed");
      speedX = 5;
    }
  }

  function handleKeyUp(event) {
    speedX = 0;
    speedY = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
  }

  function redrawGameItem() {
    $("#walker").css("top", positionX);
    $("#walker").css("left", positionY);
  }
  
}
