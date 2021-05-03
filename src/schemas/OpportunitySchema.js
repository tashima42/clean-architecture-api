import { Schema, model } from 'mongoose'

const OpportunitySchema = new Schema(
  {
    pipedriveId: {
      type: String,
      required: true,
      unique: true
    },
    client: {
      name: {
        type: String,
        required: true
      }
    },
    itens: [{
      description: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unitaryValue: {
        type: Number,
        required: true,
      },
      code: {
        type: String,
        required: true
      }
    }],
    date: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export const OpportunityDocument = model('opportunity', OpportunitySchema)
