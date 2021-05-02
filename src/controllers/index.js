import { createOpportunity, getOpportunitiesByDay } from "../use-cases/index"

import makeAddOpportunities from "./addOpportunities"
import makeListDayOpportunities from "./listDayOpportunities"

const addOpportunities = makeAddOpportunities({ createOpportunity })
const listDayOpportunities = makeListDayOpportunities({ getOpportunitiesByDay })

export { addOpportunities, listDayOpportunities }
