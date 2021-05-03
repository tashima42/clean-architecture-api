export default function buildDayOpportunityRepository({ DayOpportunityDocument, datesUtils }) {
  return Object.freeze({
    create,
    findByDay,
    findByDayPopulate,
    updateById,
  })
  async function create({ ...data }) {
    const created = DayOpportunityDocument.create({ ...data })
    return created
  }

  async function findByDay(day = datesUtils.newDate()) {
    const { start, end } = datesUtils.firstLastHourDay(day)
    const found = await DayOpportunityDocument.find({ date: { $gte: start, $lte: end } })
    if (!found[0]) return null
    return found
  }

  async function findByDayPopulate(day = datesUtils.newDate()) {
    const { start, end } = datesUtils.firstLastHourDay(day)
    const found = await DayOpportunityDocument
      .find({ date: { $gte: start, $lte: end } })
      .populate("opportunities")
    if (!found[0]) return null
    return found
  }

  async function updateById(id, updateProperties) {
    const updated = await DayOpportunityDocument.findOneAndUpdate({ _id: id }, updateProperties, { new: true })
    if (!updated) return null
    return updated
  }
}
