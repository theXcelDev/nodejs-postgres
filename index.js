const dotenv = require('dotenv')
const express = require('express')

dotenv.config()

const port = process.env.PORT_NUMBER || 3001
const app = express()

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.listen(port, () => console.log(`Server listening to port ${port}!`))