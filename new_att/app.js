const express = require("express")
const app = express()
const handlebars = require("handlebars")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

