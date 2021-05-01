import { Schema, model } from 'mongoose'
import OpportunitySchema from "./OpportunitySchema"

const DayOpportunitiesSchema = new Schema(
  {
    opportunities: {
      type: [OpportunitySchema],
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    totalValue: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

export const DayOpportunitiesDocument = model(
  'day-opportunities',
  DayOpportunitiesSchema
)
