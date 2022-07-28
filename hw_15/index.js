document.addEventListener("dblclick",()=>console.log("dbclick"));

function testFunction() {
    let x = document.getElementById("printed_text").value;
    document.getElementById('info').innerHTML = ":" + x
}

let focus = document.getElementById("focus_text");
focus.addEventListener("focus", function(){
    this.style.border = "3px solid red"
})
focus.addEventListener("blur", function(){
    this.style.border = "1px solid grey"
})

function Key_press_down(event) {
    console.log(event.type);
}

function Key_press_up(event_1) {
    console.log(event.type);
}

window.onload= function(){
    document.getElementById("txt").value="HELLO"
}