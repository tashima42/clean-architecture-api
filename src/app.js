import Koa from "koa"
import bodyParser from "koa-bodyparser"
import cors from "koa-cors"

const app = new Koa()

app
  .use(bodyParser())
  .use(cors())
  .use(async ctx => {
    ctx.body = "Hello World!"
  })

export default app
