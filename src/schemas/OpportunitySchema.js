import { Schema, model } from 'mongoose'
import ItemSchema from "./ItemSchema"
import InstallmentSchema from "./InstallmentSchema"

const OpportunitySchema = new Schema(
  {
    client: {
      name: {
        type: String,
        required: true
      }
    },
    itens: {
      type: [ItemSchema],
      required: true
    },
    installments: {
      type: [InstallmentSchema],
      required: true
    }
  },
  { timestamps: true }
)

export const OpportunityDocument = model(
  'opportunities',
  OpportunitySchema
)
