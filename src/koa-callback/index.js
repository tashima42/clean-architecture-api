export default function makeKoaCallback(controller) {
  return (ctx) => {
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
    controller(httpRequest)
      .then(httpResponse => {
        if (httpResponse.headers) {
          ctx.set(httpResponse.headers)
        }
        ctx.response.type('json')
        ctx.response.status(httpResponse.statusCode).body(httpResponse.body)
      })
  }
}
