export default function makeListDayOpportunities({ getOpportunitiesByDay, datesUtils }) {
  return async function listDayOpportunities(httpRequest) {
    try {
      const date = httpRequest.query.date
      if (!datesUtils.isValidISODate(date)) {
        throw new Error("Invalid date, please use ISO 8601 format")
      }
      const dayOpportunities = await getOpportunitiesByDay(date)
      return {
        statusCode: dayOpportunities.success ? 200 : 400,
        body: dayOpportunities
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: {
          error: {
            message: error.message,
            stack: error.stack
          }
        }
      }
    }
  }
}