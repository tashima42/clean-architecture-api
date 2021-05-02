import axios from "axios"

import buildBlingProvider from "./BlingProvider"
import buildPipedriveProvider from "./PipedriveProvider"

// TODO: implement better error handling
const BlingProvider = buildBlingProvider({ issueHttpRequest: axios })
const PipedriveProvider = buildPipedriveProvider({ issueHttpRequest: axios })

export {
  BlingProvider,
  PipedriveProvider
}
