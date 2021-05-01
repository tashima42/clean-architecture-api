export default function buildOpportunityRepository({ OpportunityDocument }) {
  return Object.freeze({
    create,
    findAll,
    findById,
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
}
