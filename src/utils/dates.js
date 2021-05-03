import { DateTime } from "luxon"

export default function buildDatesUtils() {
  return Object.freeze({
    firstLastHourDay,
    newDate,
    isValidISODate,
    parseSQL,
  })

  function firstLastHourDay(date = DateTime.now().toISO()) {
    const dateISO = DateTime.fromISO(date)
    const start = dateISO.startOf('day').toISO()
    const end = dateISO.endOf('day').toISO()
    return { start, end }
  }

  function newDate() {
    return DateTime.now().toISO().toString()
  }

  function isValidISODate(date) {
    const dateISO = DateTime.fromISO(date)
    return dateISO.isValid
  }

  function parseSQL(date) {
    const parsedDate = DateTime.fromSQL(date)
    if (!parsedDate.isValid) {
      throw new Error("Invalid date")
    }
    return parsedDate.toISO().toString()
  }
}
