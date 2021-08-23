let urlParams = new URLSearchParams(window.location.search);
let timer = document.querySelector("timer");
let title = document.querySelector("title");
// states
let timeStarts = urlParams.get("time") * 60 || 1500;
let timeRemaining = timeStarts;
let running = true;
// running = false; // enable it if you want to start timer manually
let breakTime = false;

// initial timer update
updateTimer();

// timer: key binding
document.onkeyup = function (event) {
  // pause | play using `space` = 32
  if (event.keyCode == 32) {
    resumeTimer();
  }
  // reset using `R` = 82 || 114
  if (event.keyCode == 82) {
    resetTimer();
  }
  // skip to next using `S` = 83 || 115
  if (event.keyCode == 83) {
    skipForword();
  }
  // add a minute `+` = 187
  if (event.keyCode == 187) {
    addMinute();
  }
};

// pause or play timer if you click on the timer
timer.addEventListener("click", function () {
  resumeTimer();
});

setInterval(updateTimer, 1000);

// update time in the html DOM
function updateTimer() {
  if (timeRemaining <= 0) {
    skipForword();
  }
  if (running) {
    time = convertTime(timeRemaining--);
    title.innerHTML = "Start | " + time;
    timer.innerHTML = time;
  }
}

// convert time to min & second
function convertTime(seconds) {
  if (seconds < 0) return "00:00";

  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  if (minutes < 10) minutes = `0${minutes}`;

  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}:${seconds}`;
}

// resume the timer
function resumeTimer() {
  //
  running = !running;
}

// reset timer to 00:00
function resetTimer() {
  timeRemaining = timeStarts;
  DOMValueSetter(timeRemaining);
}

// Skip timer to next
function skipForword() {
  if (breakTime == false) {
    breakTime = !breakTime;
    timeStarts = 300;
    timeRemaining = timeStarts;
    document.getElementById("timer").className = "breakTime";
  } else {
    breakTime = !breakTime;
    timeStarts = 1500;
    timeRemaining = timeStarts;
    document.getElementById("timer").className = "workTime";
  }
  if (!running) {
    DOMValueSetter(timeRemaining);
  }
}

// set timer's time in html body & title
function DOMValueSetter(timeRemaining) {
  let convertedTime = convertTime(timeRemaining);
  timer.innerHTML = convertedTime;
  title.innerHTML = "Start | " + convertedTime;
}

// add a minute to timer
function addMinute() {
  timeRemaining += 60;
  DOMValueSetter(timeRemaining);
}
