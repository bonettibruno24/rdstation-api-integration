require('dotenv').config();

const url = 'https://api.rd.services/platform/contacts';

const payload = {
    name: 'developer test',
    email: 'devtest2@gmail.com'
};

const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${process.env.RD_TOKEN}`
    },
    body: JSON.stringify(payload)
};

async function sendContact() {
    try {
        const res = await fetch(url, options);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Erro desconhecido');
        console.log('Contato criado com sucesso:', data);
    } catch (err) {
        console.error('Erro ao criar contato:', err.message);
    }
}

sendContact();

/* Expected output if  status 200(OK): {
    {
  "uuid": "76749127-3984-4f25-bbd0-42bb4ba26ae5",
  "email": "devtest2@gmail.com",
  "name": "developer test",
  "tags": [],
  "legal_bases": [],
  "links": [
    {
      "rel": "SELF",
      "href": "https://api.rd.services/platform/contacts/uuid:76749127-3984-4f25-bbd0-42bb4ba26ae5",
      "media": "application/json",
      "type": "GET"
    },
    {
      "rel": "SELF",
      "href": "https://api.rd.services/platform/contacts/email:devtest2@gmail.com",
      "media": "application/json",
      "type": "GET"
    },
    {
      "rel": "CONTACT.DELETE",
      "href": "https://api.rd.services/platform/contacts/uuid:76749127-3984-4f25-bbd0-42bb4ba26ae5",
      "media": "application/json",
      "type": "DELETE"
    },
    {
      "rel": "CONTACT.FUNNEL",
      "href": "https://api.rd.services/platform/contacts/76749127-3984-4f25-bbd0-42bb4ba26ae5/funnels/{funnel_name}",
      "media": "application/json",
      "type": "GET"
    },
    {
      "rel": "CONTACT.EVENTS",
      "href": "https://api.rd.services/platform/contacts/76749127-3984-4f25-bbd0-42bb4ba26ae5/events?event_type={event_type}",
      "media": "application/json",
      "type": "GET"
    }
  ]
}
*/