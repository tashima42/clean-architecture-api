import { makeOpportunity, makeDayOpportunity } from "../entities/index"

export default function makeCreateOpportunity({
  OpportunityRepository,
  DayOpportunityRepository,
  BlingProvider,
  PipedriveProvider,
  objectToXml,
  datesUtils
}) {
  return async function createOpportunity() {
    const deals = await PipedriveProvider.getWonDeals()
    let addedOpportunities = []
    for (let i = 0; i < deals.length; i++) {
      const deal = deals[i]
      const opportunityInfo = dealToOpportunity(deal)

      const find = await OpportunityRepository.findByProperties({ pipedriveId: opportunityInfo.pipedriveId })
      if (find) continue

      const opportunity = makeOpportunity(opportunityInfo)
      // TODO: implement transactions
      const addedOpportunity = await OpportunityRepository.create({
        pipedriveId: opportunity.getPipedriveId(),
        client: opportunity.getClient(),
        itens: opportunity.getItens(),
        date: opportunity.getDate()
      })
      addedOpportunities.push(addedOpportunity)

      await addOrUpdateDayOpportunity(addedOpportunity)

      const encodedXml = opportunityToXmlEncoded(opportunity)
      await BlingProvider.createOrder(encodedXml)
    }
    if (addedOpportunities.length === 0) addedOpportunities = null
    return { success: true, data: addedOpportunities }
  }

  async function addOrUpdateDayOpportunity(addedOpportunity) {
    const dayOpportunityProperties = {
      opportunityId: addedOpportunity._id.toString(),
      date: addedOpportunity.date,
      totalValue:
        addedOpportunity.itens[0].unitaryValue * addedOpportunity.itens[0].quantity // TODO: add multiple itens support
    }

    const findDayOpportunities = await DayOpportunityRepository.findByDay(addedOpportunity.date)

    if (findDayOpportunities) {
      const findDayOpportunity = findDayOpportunities[0]
      dayOpportunityProperties.totalValue = dayOpportunityProperties.totalValue + findDayOpportunity.totalValue
      const dayOpportunitiy = makeDayOpportunity(dayOpportunityProperties)
      await DayOpportunityRepository.updateById(
        findDayOpportunity._id,
        {
          opportunities: [...findDayOpportunity.opportunities, dayOpportunitiy.getOpportunityId()],
          totalValue: dayOpportunitiy.getTotalValue()
        }
      )
    } else {
      const dayOpportunitiy = makeDayOpportunity(dayOpportunityProperties)
      await DayOpportunityRepository.create({
        opportunities: dayOpportunitiy.getOpportunityId(),
        date: dayOpportunitiy.getDate(),
        totalValue: dayOpportunitiy.getTotalValue()
      })
    }
  }

  function dealToOpportunity(deal) {
    const opportunity = {
      pipedriveId: `${deal.id}`,
      client: {
        name: deal.org_id.name
      },
      itens: [
        {
          description: "default description",
          quantity: 1,
          unitaryValue: deal.value,
          code: "123456"
        },
      ],
      date: datesUtils.parseSQL(deal.won_time)
    }
    return opportunity
  }

  function opportunityToXmlEncoded(opportunity) {
    const client = opportunity.getClient()
    const itens = opportunity.getItens()

    const add = {
      pedido: {
        cliente: {
          nome: client.name
        },
        itens: {
          item: []
        }
      }
    }

    itens.forEach(item => {
      add.pedido.itens.item.push({
        descricao: item.description,
        qtde: item.quantity,
        vlr_unit: item.unitaryValue,
        codigo: item.code
      })
    })
    const { encoded } = objectToXml(add)
    return encoded
  }
}
