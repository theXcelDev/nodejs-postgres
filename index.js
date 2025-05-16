const express = require('express')

const port = 3001
const app = express()

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.listen(port, () => console.log(`Server listening to port ${port}!`))