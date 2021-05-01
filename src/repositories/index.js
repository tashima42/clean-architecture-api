import mongoose from "mongoose"

import { OpportunityDocument } from "../schemas/OpportunitySchema"
import { DayOpportunityDocument } from "../schemas/DayOpportunitySchema"

import buildOpportunityRepository from "./OpportunityRepository"
import buildDayOpportunityRepository from "./DayOpportunityRepository"

const user = process.env.DB_USER
const password = process.env.DB_USER_PWD
const host = process.env.DB_HOST
const name = process.env.DB_NAME
const url = `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`

async function connectDb() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    console.info("Connected to db")
  } catch (error) {
    console.error(error)
  }
}

const OpportunityRepository = buildOpportunityRepository({ OpportunityDocument })
const DayOpportunityRepository = buildDayOpportunityRepository({ DayOpportunityDocument })

export {
  connectDb,
  OpportunityRepository,
  DayOpportunityRepository,
}
