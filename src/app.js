import Koa from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"
import cors from "koa-cors"
import makeCallback from "./koaCallback"
import { addOpportunities } from "./controllers/index"

const app = new Koa()
const router = Router()

router.post("/integrations/opportunities", makeCallback(addOpportunities))

app
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async ctx => {
    ctx.body = `<a href="https://github.com/Tashima42/linkapi-teste">🦙</a>`
  })

export default app
