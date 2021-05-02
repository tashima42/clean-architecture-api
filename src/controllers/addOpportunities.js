export default function makeAddOpportunities({ createOpportunity }) {
  return async function addOpportunities(httpRequest) {
    try {
      const wereAdded = await createOpportunity()
      return {
        statusCode: wereAdded.success ? 200 : 400,
        body: wereAdded
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: { error }
      }
    }
  }
}
