export default function makeAddOpportunities({ createOpportunity }) {
  return async function addOpportunities(httpRequest) {
    try {
      const added = await createOpportunity()
      return {
        statusCode: added.success ? 200 : 400,
        body: added
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
