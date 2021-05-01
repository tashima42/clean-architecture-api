import axios from "axios"

import buildBlingProvider from "./BlingProvider"
import buildPipedriveProvider from "./PipedriveProvider"

const BlingProvider = buildBlingProvider({ issueHttpRequest: axios })
const PipedriveProvider = buildPipedriveProvider({ issueHttpRequest: axios })

export {
  BlingProvider,
  PipedriveProvider
}
