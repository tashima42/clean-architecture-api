export default function buildOpportunityRepository({ OpportunityDocument }) {
  return Object.freeze({
    create,
    findByProperties,
  })
  async function create({ ...info }) {
    const created = OpportunityDocument.create({ ...info })
    return created
  }

  async function findByProperties({ ...properties }) {
    const found = await OpportunityDocument.find({ ...properties })
    if (!found[0]) return null
    return found
  }
}
