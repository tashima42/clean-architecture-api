export default function buildMakeOpportunity({ }) {
  return function makeOpportunity({ pipedriveId, client, itens, date } = {}) {
    if (
      !pipedriveId ||
      typeof pipedriveId != "string"
    ) {
      throw new Error('Opportunity must have valid pipedriveId')
    }
    if (
      !client.name ||
      typeof client.name != "string" ||
      client.name.length < 2
    ) {
      throw new Error('Opportunity must have valid client')
    }
    if (
      !itens ||
      !Array.isArray(itens)
    ) {
      throw new Error('Opportunity must have valid itens')
    }
    itens.forEach(item => {
      if (
        !item.description ||
        typeof item.description != "string" ||
        item.description.length < 2
      ) {
        throw new Error('Item must have a valid description')
      }
      if (
        !item.quantity ||
        typeof item.quantity != "number"
      ) {
        throw new Error('Item must have a valid quantity')
      }
      if (
        !item.unitaryValue ||
        typeof item.unitaryValue != "number"
      ) {
        throw new Error('Item must have a valid unitary value')
      }
      if (
        !item.code ||
        typeof item.code != "string" ||
        item.code.length < 2
      ) {
        throw new Error('Item must have valid a code')
      }
    })

    if (
      !date ||
      !(date instanceof Date)
    ) {
      throw new Error('date must be a valid Date')
    }

    return Object.freeze({
      getPipedriveId: () => pipedriveId,
      getClient: () => client,
      getItens: () => itens,
      getDate: () => date,
    })
  }
}
