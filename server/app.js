if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Kanban app listening at http://localhost:${port}`);
})