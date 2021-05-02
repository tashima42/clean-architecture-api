export default function buildDayOpportunityRepository({ DayOpportunityDocument, datesUtils }) {
  return Object.freeze({
    create,
    findAll,
    findById,
    findByProperties,
    findByDay,
    updateById,
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

  async function findByProperties({ ...properties }) {
    const found = await DayOpportunityDocument.find({ ...properties })
    if (!found[0]) return null
    return found
  }

  async function findByDay(day = new Date()) {
    const { start, end } = datesUtils.firstLastHourDay(day)
    const found = await DayOpportunityDocument.find({ date: { $gte: start, $lte: end } })
    if (!found[0]) return null
    return found
  }

  async function updateById(id, updateProperties) {
    const updated = await DayOpportunityDocument.findOneAndUpdate({ _id: id }, updateProperties, { new: true })
    if (!updated) return null
    return updated
  }
}
