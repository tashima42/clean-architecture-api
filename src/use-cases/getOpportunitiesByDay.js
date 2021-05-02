export default function makeGetOpportunitiesByDay({ DayOpportunityRepository }) {
  return async function getOpportunitiesByDay(date) {
    try {
      const dayOpportunities = await DayOpportunityRepository.findByDayPopulate(date)
      const returnObject = {
        success: true,
        data: null
      }
      if (dayOpportunities) {
        returnObject.data = dayOpportunities
      }
      return returnObject
    } catch (error) {
      console.error(error)
      return {
        success: false,
        error
      }
    }
  }
}