const express = require("express")
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

//MIDDLEWARE
//servir contenido estatico
app.use(express.static('public'))
hbs.registerPartials(__dirname + '/views/partials', (err) => {})


//HANDLEBARS
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render("home", {
        titulo: "curso de Node",
        instructor: "Fernando Herrera"
    })
})

app.get('/generic', (req, res) => {
    res.render("generic", {
        titulo: "curso de Node",
        instructor: "Fernando Herrera"
    })
})

app.get('/elements', (req, res) => {
    res.render("elements", {
        titulo: "curso de Node",
        instructor: "Fernando Herrera"
    })
})

/* app.get('*', (req, res) => {
    res.sendFile("/public/not-found.html", {root: __dirname})
}) */

app.listen(port, () => {
    console.log(`Example app istening at localhost:${port}`)
})