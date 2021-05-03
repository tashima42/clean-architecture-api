import { expect } from "chai"

import makeCreateOpportunity from "../../src/use-cases/createOpportunity.js"
import makeGetOpportunitiesByDay from "../../src/use-cases/getOpportunitiesByDay.js"
import { buildPipedriveProvider, buildBlingProvider } from "../fixtures/providers.js"
import { buildDayOpportunityRepository, buildOpportunityRepository } from "../fixtures/repositories"
import buildDatesUtils from "../../src/utils/dates"
import objectToXml from "../../src/utils/objectToXml.js"

const PipedriveProvider = buildPipedriveProvider()
const BlingProvider = buildBlingProvider()
const datesUtils = buildDatesUtils()
const DayOpportunityRepository = buildDayOpportunityRepository()
const OpportunityRepository = buildOpportunityRepository()

const createOpportunity = makeCreateOpportunity({
  OpportunityRepository,
  DayOpportunityRepository,
  BlingProvider,
  PipedriveProvider,
  objectToXml,
  datesUtils
})

const getOpportunitiesByDay = makeGetOpportunitiesByDay({
  DayOpportunityRepository,
})

describe("test use-cases", function () {
  it("should test createOpportunity", async function () {
    const opportunity = await createOpportunity()
    const opportunityData = await OpportunityRepository.create()
    expect(opportunity.success).to.be.true
    expect(opportunity.data[0]).to.deep.equal(opportunityData)
  })

  it("should test getOpportunititesByDay", async function () {
    const dayOpportunities = await getOpportunitiesByDay()
    const dayOpportunitiesData = await DayOpportunityRepository.findByDayPopulate()
    expect(dayOpportunities.success).to.be.true
    expect(dayOpportunities.data[0]).to.deep.equal(dayOpportunitiesData[0])
  })
})