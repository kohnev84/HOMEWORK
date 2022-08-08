let value = 10;

if (value > 5) {
    console.log(value)
}

if (value < 15) {
    console.log(value)
}

if (value > 20) {
    console.log(value)
}

if (value > 18) {
    console.log(value)
}

if (value > 19) {
    console.log(value)
}

console.log(true&&false)

console.log(true||false)

console.log(true||true)

console.log(!true||true)

console.log(false&&!false)

let id = prompt('Введите id товара:');

switch (id) {
    case '1':
        alert('в наличий 10 шт.')
        break;

    case '2':
        alert('в наличий 256 шт.')
        break;

    case '3':
        alert('в наличий 53 шт.')
        break;

    case '4':
        alert('в наличий 3 шт.')
            break;
    default:
        alert("Нет в наличий")
        break;
}

let age = prompt("Введите ваш возрост");

if(age < 18) {
    alert("Access denied")
}else{
    alert("Access granted")
}