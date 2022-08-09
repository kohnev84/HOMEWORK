function logGreeting() {
    console.log(`Your name ${name} is a JS developer`)
}

let name = "Павел";
logGreeting()


function activeName(name) {
  activeNow += name;
  console.log(`${activeNow} is active now`)
}

let activeNow = "";

activeName("John")
activeName("Kate")
activeName("Scott")


function number(a, b) {
  return a = b;
}
let difference = number(10,7);
console.log(difference)