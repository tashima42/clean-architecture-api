export default function makeListDayOpportunities({ getOpportunitiesByDay }) {
  return async function listDayOpportunities(httpRequest) {
    try {
      const date = new Date(httpRequest.query.date)
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