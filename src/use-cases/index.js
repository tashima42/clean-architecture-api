import { OpportunityRepository, DayOpportunityRepository } from "../repositories/index"
import { BlingProvider, PipedriveProvider } from "../providers/index"
import objectToXml from "../utils/objectToXml"

import makeCreateOpportunity from "./createOpportunity"
import makeGetOpportunitiesByDay from "./getOpportunitiesByDay"

const createOpportunity = makeCreateOpportunity({ OpportunityRepository, DayOpportunityRepository, BlingProvider, PipedriveProvider, objectToXml })
const getOpportunitiesByDay = makeGetOpportunitiesByDay({ DayOpportunityRepository })

export { createOpportunity, getOpportunitiesByDay }
