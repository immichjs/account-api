require('dotenv').config()

const express = require('express')
const router = require('./routers')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`[API] Available on: http://localhost:${PORT} 🔥`)
})
