export default function buildMakeOpportunity({ }) {
  return function makeOpportunity({ client, itens, installments } = {}) {
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
    let itensTotalValue = 0
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
      itensTotalValue += item.quantity * item.unitaryValue
    })
    if (
      !installments ||
      !Array.isArray(installments)
    ) {
      throw new Error('Opportunity must have valid installments')
    }
    let installmentsTotalValue = 0
    installments.forEach(installment => {
      if (
        !installment.value ||
        typeof installment.value != "number"
      ) {
        throw new Error('Installment must have a value')
      }
      installmentsTotalValue += installment.value
    })

    if (itensTotalValue != installmentsTotalValue) {
      throw new Error('Opportunity must have valid totalPrice')
    }

    return Object.freeze({
      getClient: () => client,
      getItens: () => itens,
      getInstallments: () => installments,
    })
  }
}
