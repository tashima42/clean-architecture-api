export default function buildMakeDayopportunity({ datesUtils }) {
  return function makeDayopportunity({ opportunityId, date, totalValue = 0 }) {
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
      !(datesUtils.isValidISODate(date))
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
