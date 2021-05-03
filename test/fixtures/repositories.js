export function buildOpportunityRepository() {
  return Object.freeze({
    create,
    findByProperties,
  })
  async function create() {
    return new Promise(resolve => {
      resolve(
        {
          _id: "6090209df76a2a01dd11f07f",
          pipedriveId: "1",
          client: {
            name: "Dunder Mifflin"
          },
          itens: [
            {
              _id: "6090209df76a2a01dd11f080",
              description: "default description",
              quantity: 1,
              unitaryValue: 10000,
              code: "123456"
            }
          ],
          date: "2021-05-01T01:11:42.000-03:00",
          createdAt: "2021-05-03T16:11:09.809+00:00",
          updateAt: "2021-05-03T16:11:09.809+00:00",
          __v: 0
        }
      )
    })
  }

  async function findByProperties() {
    return new Promise(resolve => {
      resolve(null)
    })
  }
}

export function buildDayOpportunityRepository() {
  return Object.freeze({
    create,
    findByDay,
    findByDayPopulate,
    updateById,
  })
  async function create() {
    return new Promise(resolve => {
      resolve(
        {
          _id: "6090209df76a2a01dd11f07f",
          opportunities: [
            "6090209df76a2a01dd11f07f",
          ],
          date: "2021-05-01T01:11:42.000-03:00",
          totalValue: 10000,
          createdAt: "2021-05-03T16:11:09.809+00:00",
          updateAt: "2021-05-03T16:11:09.809+00:00",
          __v: 0
        }
      )
    })
  }

  async function findByDay() {
    return new Promise(resolve => {
      resolve(null)
    })
  }

  async function findByDayPopulate() {
    return new Promise(resolve => {
      resolve(
        [
          {
            _id: "6090209df76a2a01dd11f07f",
            opportunities: [
              {
                _id: "6090209df76a2a01dd11f07f",
                pipedriveId: "1",
                client: {
                  name: "Dunder Mifflin"
                },
                itens: [
                  {
                    _id: "6090209df76a2a01dd11f080",
                    description: "default description",
                    quantity: 1,
                    unitaryValue: 10000,
                    code: "123456"
                  }
                ],
                date: "2021-05-01T01:11:42.000-03:00",
                createdAt: "2021-05-03T16:11:09.809+00:00",
                updateAt: "2021-05-03T16:11:09.809+00:00",
                __v: 0
              }
            ],
            date: "2021-05-01T01:11:42.000-03:00",
            totalValue: 10000,
            createdAt: "2021-05-03T16:11:09.809+00:00",
            updateAt: "2021-05-03T16:11:09.809+00:00",
            __v: 0
          }
        ]
      )
    })
  }
  async function updateById() {
    return new Promise(resolve => {
      resolve(null)
    })
  }
}