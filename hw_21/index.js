for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++){
     document.getElementById("container").innerHTML += `${i} x ${j} = ${i * j }<br>`
     console.log(`${i * j}`)
    }
}

let menu = {
    Hamburger: 7,
    Pizza: 15,
    Lasagna: 9,
    Borscht: 5,
    Steak: 25,
    Shawarma:9,
    Caesar:17,
    Tea:3,
    French_fries:6,
    milkshake:8
};

for(const key in menu){
    document.getElementById("container-2").innerHTML += `${key} - ${menu[key]} $<br>`
}