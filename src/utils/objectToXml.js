import convert from 'xml-js'

export default function objectToXmlEncoded({ ...data }) {
  const base = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "UTF-8"
      }
    },
    ...data
  }

  const options = { compact: true, ignoreComment: true, spaces: 0 }
  const result = convert.js2xml(base, options)
  const encoded = encodeURIComponent(result)

  return {
    plain: result,
    encoded
  }
}
