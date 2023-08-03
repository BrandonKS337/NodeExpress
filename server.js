const express = require("express")
const app = express()

require("dotenv").config()

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Hello world, this is an express-mysql app."})
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`)
})