let hourElement = document.querySelector('.hour')
let minuteElement = document.querySelector('.minute')
let secondElement = document.querySelector('.second')
let millisecondElement = document.querySelector('.millisecond')

let startButton = document.querySelector('.start')
let pauseButton = document.querySelector('.pause')
let resetButton = document.querySelector('.reset')

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () =>{
    clearInterval(interval)
})

resetButton.addEventListener('click', () =>{
    clearInterval(interval)
    clearFields()
})


let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval

function startTimer(){
    //Милисекунды

    millisecond++
    if(millisecond < 9) {
        millisecondElement.innerHTML = '0' + millisecond
    }
    if(millisecond > 9) {
        millisecondElement.innerHTML = millisecond
    }
    if(millisecond > 99) {
        second++
        secondElement.innerHTML = '0' + second
        millisecond = 0
        millisecondElement.innerHTML = '0' + millisecond
    }


    //Секунды

    if(second < 9) {
        secondElement.innerHTML = '0' + second
    }
    if(second > 9) {
        secondElement.innerHTML = second
    }
    if(second > 59) {
        minute++
        minuteElement.innerHTML = '0' + minute
        second = 0
        secondElement.innerHTML = '0' + second
    }

    //Минуты

    if(minute < 9) {
        minuteElement.innerHTML = '0' + minute
    }
    if(minute > 9) {
        minuteElement.innerHTML = minute
    }
    if(minute > 59) {
        hour++
        hourElement.innerHTML = '0' + hour
        minute = 0
        minuteElement.innerHTML = '0' + minute
    }

    //Часы

    if(hour < 9) {
        hourElement.innerHTML = '0' + hour
    }
    if(hour > 9) {
        hourElement.innerHTML = hour
    }
}

function clearFields(){
    hour = 00;
    minute = 00;
    second = 00;
    millisecond = 00;
    hourElement.textContent = "0"
    minuteElement.textContent = "0"
    secondElement.textContent = "0"
    millisecondElement.textContent = "0"
}