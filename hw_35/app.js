const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log("Проверка. Ловим запрос")
    res.send("Server worked")
})

app.listen(3000, console.log("Сервер запущен и использует порт 3000"))