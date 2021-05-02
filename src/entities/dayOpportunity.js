export default function buildMakeDayopportunity({ }) {
  return function makeDayopportunity({ opportunityId, date, totalValue = 0 }) {
    console.log(opportunityId, totalValue, date, typeof opportunityId)
    if (
      !opportunityId ||
      typeof opportunityId != "string"
    ) {
      throw new Error('Day opportunities must have valid opportunityId')
    }

    if (
      typeof totalValue != "number"
    ) {
      throw new Error('Day opportunities must have valid totalValue')
    }

    if (
      !date ||
      !(date instanceof Date)
    ) {
      throw new Error('Day opportunities must have a valid date')
    }

    return Object.freeze({
      getOpportunityId: () => opportunityId,
      getDate: () => date,
      getTotalValue: () => totalValue,
    })
  }
}
