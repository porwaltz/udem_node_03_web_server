const express = require("express")

const app = express()
const port = 3000

//MIDDLEWARE
//servir contenido estatico
app.use(express.static("public/old"))


app.get('/envioHtmlEstatico', (req, res) => {
    res.sendFile(__dirname + "/public/old/example.html")
})

app.get('*', (req, res) => {
    res.sendFile("/public/old/not-found.html", {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app istening at localhost:${port}`)
})