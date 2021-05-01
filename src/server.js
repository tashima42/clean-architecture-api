import "dotenv/config"
import app from "./app"
import { connectDb } from "./repositories/index"

const port = process.env.PORT || 3000

connectDb().then(() => {
  app.listen(port, () => {
    console.info("Server is listening on port ", port)
  })
})
