export function buildPipedriveProvider() {
  return Object.freeze({ getWonDeals })
  async function getWonDeals() {
    return new Promise((resolve) => {
      const response = `
 {
  "success": true,
  "data": [
    {
      "id": 1,
      "creator_user_id": {
        "id": 12256567,
        "name": "Pedro Tashima",
        "email": "pedrotashima42@gmail.com",
        "has_pic": 0,
        "pic_hash": null,
        "active_flag": true,
        "value": 12256567
      },
      "user_id": {
        "id": 12256567,
        "name": "Pedro Tashima",
        "email": "pedrotashima42@gmail.com",
        "has_pic": 0,
        "pic_hash": null,
        "active_flag": true,
        "value": 12256567
      },
      "person_id": {
        "active_flag": true,
        "name": "Michael Scott",
        "email": [
          {
            "value": "",
            "primary": true
          }
        ],
        "phone": [
          {
            "value": "",
            "primary": true
          }
        ],
        "value": 1
      },
      "org_id": {
        "name": "Dunder Mifflin",
        "people_count": 1,
        "owner_id": 12256567,
        "address": null,
        "active_flag": true,
        "cc_email": "tashima@pipedrivemail.com",
        "value": 1
      },
      "stage_id": 5,
      "title": "Negócio Dunder Mifflin",
      "value": 10000,
      "currency": "BRL",
      "add_time": "2021-04-30 00:57:52",
      "update_time": "2021-05-01 01:11:42",
      "stage_change_time": "2021-04-30 00:58:54",
      "active": false,
      "deleted": false,
      "status": "won",
      "probability": null,
      "next_activity_date": null,
      "next_activity_time": null,
      "next_activity_id": null,
      "last_activity_id": null,
      "last_activity_date": null,
      "lost_reason": null,
      "visible_to": "3",
      "close_time": "2021-05-01 01:11:42",
      "pipeline_id": 1,
      "won_time": "2021-05-01 01:11:42",
      "first_won_time": "2021-04-30 00:58:15",
      "lost_time": null,
      "products_count": 0,
      "files_count": 0,
      "notes_count": 0,
      "followers_count": 1,
      "email_messages_count": 0,
      "activities_count": 0,
      "done_activities_count": 0,
      "undone_activities_count": 0,
      "participants_count": 1,
      "expected_close_date": "2021-04-29",
      "last_incoming_mail_time": null,
      "last_outgoing_mail_time": null,
      "label": null,
      "renewal_type": "one_time",
      "stage_order_nr": 4,
      "person_name": "Michael Scott",
      "org_name": "Dunder Mifflin",
      "next_activity_subject": null,
      "next_activity_type": null,
      "next_activity_duration": null,
      "next_activity_note": null,
      "group_id": null,
      "group_name": null,
      "formatted_value": "R$ 10.000",
      "weighted_value": 10000,
      "formatted_weighted_value": "R$ 10.000",
      "weighted_value_currency": "BRL",
      "rotten_time": null,
      "owner_name": "Pedro Tashima",
      "cc_email": "tashima+deal1@pipedrivemail.com",
      "org_hidden": false,
      "person_hidden": false
    }
  ]
}
 `
      const parsedResponse = JSON.parse(response)
      resolve(parsedResponse.data)
    })
  }
}

export function buildBlingProvider() {
  return Object.freeze({ createOrder })
  async function createOrder() {
    return new Promise((resolve) => {
      const response = `
      {
  "retorno": {
    "pedidos": [
      {
        "pedido": {
          "numero": "45",
          "idPedido": 12401200920,
          "codigos_rastreamento": {
            "codigo_rastreamento": null
          },
          "volumes": null
        }
      }
    ]
  }
}
      `
      resolve(response)
    })
  }
}
