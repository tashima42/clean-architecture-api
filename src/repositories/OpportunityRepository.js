export default function buildOpportunityRepository({ OpportunityDocument }) {
  return Object.freeze({
    create,
    findAll,
    findById,
    findByProperties,
  })
  async function create({ ...info }) {
    const created = OpportunityDocument.create({ ...info })
    return created
  }

  async function findAll() {
    const all = await OpportunityDocument.find({})
    return all
  }

  async function findById(id) {
    const rawFound = await OpportunityDocument.find({ _id: id })
    const found = rawFound[0]
    if (!found._id) return null
    return found
  }

  async function findByProperties({ ...properties }) {
    const found = await OpportunityDocument.find({ ...properties })
    if (!found[0]) return null
    return found
  }
}
