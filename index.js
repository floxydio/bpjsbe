const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const cors = require("cors")

// controller
const IndexController = require("./controllers/indexController")

// handle CORS
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))


app.get("/", IndexController.indexHome)


app.listen(port, () => console.log(`Running at ${port}`))

// APP RUNNING AT 3000