const express = require("express")
const app = express()


require("dotenv").config()

let dbConnect = require('./dbConnect')

const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.get("/", (req, res) => {
    res.json({message: "Hello world, this is an express-mysql app."})
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`)
})