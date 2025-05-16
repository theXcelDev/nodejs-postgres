import dotenv from 'dotenv'
import express from 'express'
import { Sequelize } from 'sequelize'

dotenv.config()

const username = encodeURIComponent(process.env.POSTGRES_USERNAME)
const password = encodeURIComponent(process.env.POSTGRES_PASSWORD)
const hostname = encodeURIComponent(process.env.POSTGRES_HOSTNAME)
const portNumber = encodeURIComponent(process.env.POSTGRES_PORT_NUMBER)
const database = encodeURIComponent(process.env.POSTGRES_DATABASE)

const sequelize = new Sequelize(
  `postgres://${username}:${password}@${hostname}:${portNumber}/${database}`
)

try {
  await sequelize.authenticate()
  console.log('Database connected!')
} catch (error) {
  console.error(error)
}

const port = process.env.PORT_NUMBER || 3001
const app = express()

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(port, () => console.log(`Server listening to port ${port}!`))
