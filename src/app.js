import Koa from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"
import cors from "koa-cors"
import makeCallback from "./koaCallback"
import { addOpportunities, listDayOpportunities } from "./controllers/index"

const app = new Koa()
const router = Router()

/**
 * @api {post} /opportunities/integrations
 * @apiName IntegrateOpportunities
 * @apiGroup Opportunities
 * 
 * @apiSuccess {Boolean} success If true, the operation was a success
 * @apiSuccess {Array} addedOpportunities Integrated opportunities
 */
router.post("/opportunities/integrations", makeCallback(addOpportunities))
/**
 * @api {get} /opportunities/day
 * @apiName DayOpportunities
 * @apiGroup Opportunities
 * 
 * @apiParam {Date} date Day to retrieve integrated opportunities
 * 
 * @apiSuccess {Boolean} success If true, the operation was a success
 * @apiSuccess {Array} dayOpportunities Opportunities integrated on the query day
 */
router.get("/opportunities/day", makeCallback(listDayOpportunities))

app
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async ctx => {
    ctx.body = `<a href="https://github.com/Tashima42/clean-architecture-api">🦙</a>`
  })

export default app
