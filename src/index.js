import "dotenv/config"
import Koa from "koa"
import bodyParser from "koa-bodyparser"
import cors from "koa-cors"

const port = process.env.PORT || 3000
const app = new Koa()

app
  .use(bodyParser())
  .use(cors())
  .use(async ctx => {
    ctx.body = "Hello World!"
  })

app.listen(port, () => {
  console.info("Server is listening on port ", port)
})
