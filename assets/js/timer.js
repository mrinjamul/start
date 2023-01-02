let urlParams = new URLSearchParams(window.location.search);
let timer = document.querySelector("timer");
let title = document.querySelector("title");
// states
let timeStarts = urlParams.get("time") * 60 || 1500;
let timeRemaining = timeStarts;
let sessionCounter = 1;
let running = true;
running = urlParams.get("running") == "false" ? false : true;
// running = false; // enable it if you want to start timer manually
let breakTime = false;
// voice Assistance
let voiceAssist = true;

// audios
var focus_finished = new Howl({
  src: ["assets/audio/focus-finished.webm", "assets/audio/focus-finished.mp3"],
  onplayerror: function () {
    focus_finished.once("unlock", function () {
      focus_finished.play();
    });
  },
  html5: true,
});
var break_finished = new Howl({
  src: ["assets/audio/break-finished.webm", "assets/audio/break-finished.mp3"],
  html5: true,
});
var sixty_sec_left = new Howl({
  src: [
    "assets/audio/sixty-seconds-left.webm",
    "assets/audio/sixty-seconds-left.mp3",
  ],
  html5: true,
});
var thirty_sec_left = new Howl({
  src: [
    "assets/audio/thirty-seconds-left.webm",
    "assets/audio/thirty-seconds-left.mp3",
  ],
  html5: true,
});
var session_completed = new Howl({
  src: [
    "assets/audio/session-completed.webm",
    "assets/audio/session-completed.mp3",
  ],
  html5: true,
});
var special_break_started = new Howl({
  src: [
    "assets/audio/special-break-started.webm",
    "assets/audio/special-break-started.mp3",
  ],
  html5: true,
});

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
    let time = convertTime(timeRemaining--);
    title.innerHTML = "Start | " + time;
    timer.innerHTML = time;
    // play audio
    if (voiceAssist == true) {
      if (timeRemaining == 60) {
        sixty_sec_left.play();
      }
      if (timeRemaining == 30) {
        thirty_sec_left.play();
      }
    }
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
    let sessionFlag = false;
    breakTime = !breakTime;
    timeStarts = 300;
    if (sessionCounter == 4) {
      timeStarts = 900;
      sessionCounter = 0;
      sessionFlag = true;
    }
    timeRemaining = timeStarts;
    document.getElementById("timer").className = "breakTime";
    // play audio
    if (voiceAssist == true) {
      if (sessionFlag == true) {
        special_break_started.play();
        sessionFlag = false;
      } else {
        focus_finished.play();
      }
    }
  } else {
    breakTime = !breakTime;
    timeStarts = 1500;
    timeRemaining = timeStarts;
    sessionCounter++;
    document.getElementById("timer").className = "workTime";
    // play audio
    if (voiceAssist == true) {
      if (sessionCounter == 1) {
        session_completed.play();
      } else {
        break_finished.play();
      }
    }
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
