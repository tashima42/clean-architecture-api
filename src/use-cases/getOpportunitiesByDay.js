export default function makeGetOpportunitiesByDay({ DayOpportunityRepository }) {
  return async function getOpportunitiesByDay(date) {
    const dayOpportunities = await DayOpportunityRepository.findByDayPopulate(date)
    const returnObject = {
      success: true,
      data: null
    }
    if (dayOpportunities) {
      returnObject.data = dayOpportunities
    }
    return returnObject
  }
}