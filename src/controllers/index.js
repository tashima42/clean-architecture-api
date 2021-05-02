import { createOpportunity } from "../use-cases/index"

import makeAddOpportunities from "./addOpportunities"

const addOpportunities = makeAddOpportunities({ createOpportunity })

export { addOpportunities }
