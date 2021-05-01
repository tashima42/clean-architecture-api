import { Schema, model } from 'mongoose'

const DayOpportunitySchema = new Schema(
  {
    opportunities: {
      type: [Schema.Types.ObjectId],
      ref: "opportunity",
      required: false,
      default: []
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

export const DayOpportunityDocument = model('day-opportunity', DayOpportunitySchema)
