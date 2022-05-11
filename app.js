const express = require("express")

const app = express()
const port = 3000

//MIDDLEWARE
//servir contenido estatico
//app.use(express.static('public/new'))


//HANDLEBARS
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render("home")
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + "/public/new/generic.html")
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + "/public/new/elements.html")
})

app.get('*', (req, res) => {
    res.sendFile("/public/new/not-found.html", {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app istening at localhost:${port}`)
})