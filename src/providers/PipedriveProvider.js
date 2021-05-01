export default function buildPipedriveProvider({ issueHttpRequest }) {
  return Object.freeze({
    getDeals,
  })

  async function getDeals() {
    const baseURL = process.env.PIPEDRIVE_BASE_URL
    const apiKey = process.env.PIPEDRIVE_API_KEY
    const options = {
      baseURL,
      url: `/deals?api_token=${apiKey}`,
      method: "get",
    }
    try {
      const response = await issueHttpRequest(options)
      return response.data
    } catch (error) {
      console.error(error.response)
    }
  }
}
