import makeDatesUtils from "../utils/dates"
const datesUtils = makeDatesUtils()

import buildMakeDayOpportunity from "./dayOpportunity"
import buildMakeOpportunity from "./opportunity"

const makeDayOpportunity = buildMakeDayOpportunity({ datesUtils })
const makeOpportunity = buildMakeOpportunity({ datesUtils})

export {
  makeDayOpportunity,
  makeOpportunity
}
