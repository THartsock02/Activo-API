import express from 'express'
import helmet from 'helmet'
import dotenv from 'dotenv'
import routes from './src/routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(helmet())
app.use(routes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
