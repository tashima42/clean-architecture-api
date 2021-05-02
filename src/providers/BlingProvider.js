export default function buildBlingProvider({ issueHttpRequest }) {
  return Object.freeze({
    createOrder,
  })

  async function createOrder(encodedXml) {
    const baseURL = process.env.BLING_BASE_URL
    const apiKey = process.env.BLING_API_KEY
    const options = {
      baseURL,
      url: `/pedido/json/?apikey=${apiKey}&xml=${encodedXml}`,
      method: "post",
    }
    const response = await issueHttpRequest(options)
    if (response.data.retorno.erros) {
      throw new Error(response.data.retorno.erros)
    }
    return response.data
  }
}
