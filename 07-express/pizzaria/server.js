// Express
const express = require('express')

const app = express()

const pizzasRoutes = require('./routes/pizzasRoutes')

app.use("/pizzas", pizzasRoutes)

app.listen(3000)