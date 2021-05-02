import { OpportunityRepository, DayOpportunityRepository } from "../repositories/index"
import { BlingProvider, PipedriveProvider } from "../providers/index"
import objectToXml from "../utils/objectToXml"

import makeCreateOpportunity from "./createOpportunity"

const createOpportunity = makeCreateOpportunity({ OpportunityRepository, DayOpportunityRepository, BlingProvider, PipedriveProvider, objectToXml })

const opportunityService = Object.freeze({
  createOpportunity
})

export default opportunityService
export { createOpportunity }
