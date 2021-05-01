export default function buildMakeDayOpportunity({ }) {
  return function makeDayOpportunity({ opportunities, date, totalValue } = {}) {
    if (
      !opportunities ||
      !Array.isArray(opportunities)
    ) {
      throw new Error('Day Opportunity must have valid opportuninities')
    }
    let opportunitiesTotalValue = 0
    opportunities.forEach(opportunity => {
      if (!sameDay(opportunity.date, date)) {
        throw new Error('Opportunity must have a same date as Day Opportunity')
      }
      opportunity.installments(installment => {
        opportunitiesTotalValue += installment.value
      })
    })

    if (totalValue) {
      if (typeof totalValue != "number") {
        throw new Error('Day Opportunity must have valid totalValue')
      }
      totalValue = opportunitiesTotalValue - totalValue
    } else {
      totalValue = opportunitiesTotalValue
    }

    if (
      !date ||
      typeof date != "date"
    ) {
      throw new Error('Day Opportunity must have a valid date')
    }
    return Object.freeze({
      getOpportunities: () => opportunities,
      getDate: () => date,
      getTotalValue: () => totalValue,
    })
  }

  function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
  }
}
