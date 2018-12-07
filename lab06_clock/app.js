// -------------------- V1 LAB -------------------- //



// Sets clock on page, so it loads with the time instead of waiting
let v1Date = new Date();
document.getElementById("clock-wrapper").innerHTML = v1Date.toLocaleTimeString();

// Variable to set clock changes every second
let clockInterval = setInterval(clockTimer, 1000);

// Function to update time
function clockTimer() {
    v1Date = new Date();
    document.getElementById("clock-wrapper").innerHTML = v1Date.toLocaleTimeString();
};



// -------------------- V2 LAB -------------------- //



// Creates new date, initiates 0 time, creates 0:0:0 text at top, inits sec counter
let d = new Date();
d.setHours(0, 0, 0, 0);
document.getElementById("clock").innerHTML = d.toLocaleTimeString("en-gb");
let secCounter = 0;

// Main function to update seconds
function clock() {
    secCounter += 1;
    d.setHours(0, 0, secCounter);
    document.getElementById("clock").innerHTML = d.toLocaleTimeString("en-gb");
}

// Start button stuff
let myTimer;
let startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", function(e) {
    if (startBtn.innerText == "Start") {
        myTimer = setInterval(clock, 1000);
        startBtn.innerText = "Stop";
        resetBtn.disabled = true;
    } else if (startBtn.innerText == "Stop") {
        clearInterval(myTimer);
        startBtn.innerText = "Start";
        resetBtn.disabled = false;
    }
});

// Reset button stuff
let resetBtn = document.getElementById("reset-button");
resetBtn.disabled = false;
resetBtn.addEventListener("click", function(e) {
    d.setHours(0, 0, 0, 0);
    document.getElementById("clock").innerHTML = d.toLocaleTimeString("en-gb");
    secCounter = 0;
});

// Lap button stuff
let lapCounter = 1;
let lapBtn = document.getElementById("lap-button");
lapBtn.addEventListener("click", function(e) {

    let lapVar = document.createTextNode(`Lap ${lapCounter}: ` + d.toLocaleTimeString("en-gb"));

    lapCounter++;

    let newElement = document.createElement("li");

    newElement.appendChild(lapVar);

    document.getElementById("lap-list").appendChild(newElement);
});



// -------------------- V3 LAB -------------------- //

let v3Date = new Date();
v3Date.setHours(0, 0, 0);

// Countdown Timer displayed on page
let countdownTimer = document.getElementById("countdown-timer").innerHTML = v3Date.toLocaleTimeString("en-gb");

// Dropdown Menu
let dropMenu = document.getElementById("countdown-list");

// Time Submit Button
let timeSubmit = document.getElementById("countdown-input-btn");

// Time Input Box
let timeInput = document.getElementById("countdown-input");

// Reset Button
let resetBtnv3 = document.getElementById("countdown-reset-btn");

// Stop Button
let stopButtonv3 = document.getElementById("countdown-stop-btn");

// Start Button
let startBtnv3 = document.getElementById("countdown-start-btn");

// Show Clock Button
let showClock = document.getElementById("show-clock");

// Show Laps Button
let showLaps = document.getElementById("show-laps");

// Show Countdown Button
let showCountdown = document.getElementById("show-countdown");




// Event for submitting countdown timer
timeSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    if (dropMenu.value == "Hour") {
        v3Date.setHours(timeInput.value);
        document.getElementById("countdown-timer").innerHTML = v3Date.toLocaleTimeString("en-gb");
    } else if (dropMenu.value == "Minute") {
        v3Date.setMinutes(timeInput.value);
        document.getElementById("countdown-timer").innerHTML = v3Date.toLocaleTimeString("en-gb");
    } else if (dropMenu.value == "Second") {
        v3Date.setSeconds(timeInput.value);
        document.getElementById("countdown-timer").innerHTML = v3Date.toLocaleTimeString("en-gb");
    }

    timeInput.value = "";
    document.getElementById("countdown-timer-wrapper").style.backgroundColor = "white";
});

// Dropdown Menu Input box
timeInput.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        timeSubmit.click();
    }
})

// Function to minus seconds and display
function countdownClock() {
    // console.log(v3Date)
    v3Date.setSeconds(v3Date.getSeconds()-1);
    document.getElementById("countdown-timer").innerHTML = v3Date.toLocaleTimeString("en-gb");
    if (v3Date.getHours() === 0 && v3Date.getMinutes() === 0 && v3Date.getSeconds() === 0) {
        clearInterval(myTimerv3);
        alert("You're Done");
        document.getElementById("countdown-timer-wrapper").style.backgroundColor = "red";
    }
};

// Start button stuff, initiates countdown
let myTimerv3;
startBtnv3.addEventListener("click", function(e) {
    myTimerv3 = setInterval(countdownClock, 1000);
});

// Stop Button Listener
stopButtonv3.addEventListener("click", function(e) {
    clearInterval(myTimerv3);
});

// Reset Button Listener
resetBtnv3.addEventListener("click", function(e) {
    v3Date.setHours(0, 0, 0)
    countdownTimer = document.getElementById("countdown-timer").innerHTML = v3Date.toLocaleTimeString("en-gb");
});

// Show Clock Listener
showClock.addEventListener("click", function(e) {
    if (showClock.innerText === "Show Clock") {
        document.getElementById("clock-wrapper").style.display = "block";
        showClock.innerText = "Hide Clock";
    } else if (showClock.innerText === "Hide Clock") {
        document.getElementById("clock-wrapper").style.display = "none";
        showClock.innerText = "Show Clock";
    }
})

// Show Laps Listener
showLaps.addEventListener("click", function(e) {
    if (showLaps.innerText === "Show Laps") {
        document.getElementById("lap-timer-wrapper").style.display = "grid";
        showLaps.innerText = "Hide Laps";
    } else if (showLaps.innerText === "Hide Laps") {
        document.getElementById("lap-timer-wrapper").style.display = "none";
        showLaps.innerText = "Show Laps";
    }
})

// Show Countdown Listener
showCountdown.addEventListener("click", function(e) {
    if (showCountdown.innerText === "Show Countdown") {
        document.getElementById("countdown-timer-wrapper").style.display = "grid";
        showCountdown.innerText = "Hide Countdown";
    } else if (showCountdown.innerText === "Hide Countdown") {
        document.getElementById("countdown-timer-wrapper").style.display = "none";
        showCountdown.innerText = "Show Countdown";
    }
})


// -------------------- V4 LAB -------------------- //

{/* <button class="ui icon button">
  <i class="cloud icon"></i>
</button>

<div class="ui buttons">
  <button class="ui button active">One</button>
  <button class="ui button">Two</button>
  <button class="ui button">Three</button>
</div> */}

