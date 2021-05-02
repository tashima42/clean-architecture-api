export default function makeKoaCallback(controller) {
  return async function (ctx) {
    const httpRequest = {
      body: ctx.body,
      query: ctx.query,
      params: ctx.params,
      method: ctx.method,
      path: ctx.path,
      headers: {
        'Content-Type': ctx.request.get('Content-Type'),
        Referer: ctx.request.get('referer'),
        'User-Agent': ctx.request.get('User-Agent'),
      }
    }
    const httpResponse = await controller(httpRequest)
    try {
      if (httpResponse.headers) {
        ctx.set(httpResponse.headers)
      }
      ctx.type = 'json'
      ctx.status = httpResponse.statusCode
      ctx.body = httpResponse.body
    } catch (error) {
      ctx.satus = 500
      ctx.body = { error: 'Internal server error' }
    }
  }
}
