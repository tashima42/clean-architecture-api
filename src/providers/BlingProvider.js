export default function buildBlingProvider({ issueHttpRequest }) {
  return Object.freeze({
    getContacts,
    createOrder,
  })

  async function getContacts() {
    const baseURL = process.env.BLING_BASE_URL
    const apiKey = process.env.BLING_API_KEY
    const options = {
      baseURL,
      url: `/contatos/json/?apikey=${apiKey}`,
      method: "get",
    }
    try {
      const response = await issueHttpRequest(options)
      return response.data
    } catch (error) {
      console.error(error.response)
    }
  }

  async function createOrder(encodedXml) {
    const baseURL = process.env.BLING_BASE_URL
    const apiKey = process.env.BLING_API_KEY
    const options = {
      baseURL,
      url: `/pedido/json/?apikey=${apiKey}&xml=${encodedXml}`,
      method: "post",
    }
    try {
      const response = await issueHttpRequest(options)
      if (response.data.retorno.erros) {
        throw new Error(response.data.retorno.erros)
      }
      return response.data
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}
