var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var breakPlus = document.getElementById('breakPlus');
var breakMinus = document.getElementById('breakMinus');
var sessionAdd = document.getElementById('sessionAdd');
var sessionMinus = document.getElementById('sessionMinus');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;
var newBreakTimer;
var newSessionTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

breakPlus.addEventListener('click', function(){
    if(bm.innerText < 60 && startTimer === undefined){
        bm.innerText++;
        newBreakTimer=bm.innerText;
    } 
})

breakMinus.addEventListener('click', function(){
    if(bm.innerText > 1 && startTimer === undefined){
        bm.innerText--;
        newBreakTimer=bm.innerText;
    } 
})

sessionAdd.addEventListener('click', function(){
    if(wm.innerText < 60 && startTimer === undefined){
        wm.innerText++;
        newSessionTimer = wm.innerText;
    } 
})

sessionMinus.addEventListener('click', function(){
    if(wm.innerText > 1 && startTimer === undefined){
        wm.innerText--;
        newSessionTimer = wm.innerText;
    } 
})

//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = newSessionTimer;
        // wm.innerText = 25;
        ws.innerText = "00";

        // bm.innerText = 5;
        bm.innerText=newBreakTimer;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}

// Increase Break Length

// Decrease Break Length

// Increase Session Length

// Decrease Session Length