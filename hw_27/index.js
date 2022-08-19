async function foo() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if(response.ok) {
    let json = await response.json();
    console.log(json)
  }else {
     alert("Ошибка:" + response.status)
  }
}
foo()

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response2 => response2.json())
.then(result => console.log(result))

// response3 = await fetch(
//     'https://jsonplaceholder.typicode.com/albums',
//     {
//         headers:{
//             'Content-Type':'application/json',
//         },
//         method:'GET'
//     });
//     const result2 = await response3.json();
//     console.log(result2)

let xhr = new XMLHttpRequest();
xhr.open("GET",`https://jsonplaceholder.typicode.com/photos`)

xhr.send();

xhr.onload = function (){
   if (xhr.status == 200){
    console.log(xhr.status)
    console.log(xhr.response)
   }else{
    alert("ERROR")
   }
}