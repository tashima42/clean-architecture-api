import { Schema, model } from 'mongoose'

const ItemSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    unitaryValue: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

export const ItemDocument = model(
  'itens',
  ItemSchema
)
