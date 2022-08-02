document.getElementById("compony_but").onclick = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
        (arr) => {
            arr.forEach((e,index)=>{
                document.getElementById("componyList").innerHTML += `<span style="color: rgb(42, 172, 165); background-color:rgb(156,204,101); font-size:20px; border-radius: 5px;">${index + 1}. ${e.name} ${e.username} ${e.email} ${e.address.city} ${e.website} ${e.username} ${e.company.name}<br></br></span>`
            })
        }
    )
}