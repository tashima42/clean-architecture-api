export default function buildDayOpportunityRepository({ DayOpportunityDocument }) {
  return Object.freeze({
    create,
    findAll,
    findById,
  })
  async function create({ ...data }) {
    const created = DayOpportunityDocument.create({ ...data })
    return created
  }

  async function findAll() {
    const all = await DayOpportunityDocument.find({})
    return all
  }

  async function findById(id) {
    const rawFound = await DayOpportunityDocument.find({ _id: id })
    const found = rawFound[0]
    if (!found._id) return null
    return found
  }
}
