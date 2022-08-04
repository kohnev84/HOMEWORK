    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': '9a88492b-1b04-4d1e-8a02-f1aff2d3832b',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(
        (arr)=>{
            arr.films.forEach(element => {
                console.log(element)
                document.getElementById("container").innerHTML += `<span style="font-size:20px; font-family: 'Yanone Kaffeesatz', sans-serif;"><img style="width: 300px; border:2px solid black; border-radius:5px;" src = " ${element.posterUrl}"/><br> ${element.nameRu} <br>Время ${element.filmLength} <br>Рейтинг ${element.rating} <br>Год выхода ${element.year}<br>`
            });
        }
    )
    .catch(err => console.log(err))
    