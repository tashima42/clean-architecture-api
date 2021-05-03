import { OpportunityRepository, DayOpportunityRepository } from "../repositories/index"
import { BlingProvider, PipedriveProvider } from "../providers/index"
import objectToXml from "../utils/objectToXml"
import makeDatesUtils from "../utils/dates"
const datesUtils = makeDatesUtils()

import makeCreateOpportunity from "./createOpportunity"
import makeGetOpportunitiesByDay from "./getOpportunitiesByDay"

const createOpportunity = makeCreateOpportunity({
  OpportunityRepository,
  DayOpportunityRepository,
  BlingProvider,
  PipedriveProvider,
  objectToXml,
  datesUtils
})
const getOpportunitiesByDay = makeGetOpportunitiesByDay({ DayOpportunityRepository })

export { createOpportunity, getOpportunitiesByDay }
