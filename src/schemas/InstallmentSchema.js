import { Schema, model } from 'mongoose'

const InstallmentSchema = new Schema(
  {
    value: {
      type: Number,
      required: true
    },
  },
  { timestamps: true }
)

export const InstallmentDocument = model(
  'intallments',
  InstallmentSchema
)
