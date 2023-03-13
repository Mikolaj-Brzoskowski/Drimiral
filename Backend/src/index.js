const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
    res.json({
        info: "Successful connect to API"
    })
})

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})

app.get('/data', GETDATA)

exports.server = server