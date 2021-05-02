export default function buildDatesUtils() {
  return Object.freeze({
    firstLastHourDay,
  })

  function firstLastHourDay(date = new Date()) {
    const start = new Date(date)
    const end = new Date(date)
    start.setHours(0, 0, 0, 0)
    end.setHours(23, 59, 59, 999)
    return { start, end }
  }
}
