const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");
const resetBtn = document.querySelector(".reset__btn");
const secSection = document.querySelector("#sec");
const minSection = document.querySelector("#min");
const hourSection = document.querySelector("#hour");
const countSection = document.querySelector("#count");
const digitSection = document.querySelector(".digit");

let count = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer = false;
let interval;

startBtn.addEventListener("click",(e) => {
    timer = true;
    interval = setInterval(startTimer, 10);
})

stopBtn.addEventListener("click", (e) => {
        clearInterval(interval);
    
})

resetBtn.addEventListener("click", (e) => {
   timer = false;
    count = 0;
    sec = 0;
    min = 0;
    hour = 0;
    countSection.textContent = "00";
    secSection.textContent = "00";
    minSection.textContent = "00";
    hourSection.textContent = "00";
})

function startTimer(){
    if(timer){
        countSection.textContent = ++count;

        if(count === 99){
            secSection.textContent = ++sec;
            count = 0;
        }


      if(sec === 59){
            minSection.textContent = ++min;
            sec = 0;
        }

        if(min === 59){
            hourSection.textContent = ++hour;
            min = 0;
        }

        // if they are less than 10, there must be a zero before each count

        if(count <= 9){
            countSection.textContent = `0${count}`;
        }

        if(sec <= 9){
            secSection.textContent = `0${sec}`;
        }

        if(min <= 9){
            minSection.textContent = `0${min}`;
        }

        if (hour <= 9){
            hourSection.textContent = `0${hour}`;
        }

    }
}