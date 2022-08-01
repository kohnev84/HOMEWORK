let a2 = { "one" : "hello", "two" : "mahai", "five" : "hi" };


//Задание 1
document.getElementById("Task-2").onclick = ()=>{
document.querySelector(".container-2").innerHTML = a2.five;
}


//Задание 2
document.getElementById("Task-3").onclick = ()=>{
    document.querySelector(".container-3").innerHTML =  Object.entries(a2)
    }

