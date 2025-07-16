require('dotenv').config();

const url = 'https://api.rd.services/platform/events';

const payload = {
  event_type: 'CONVERSION',
  event_family: 'CDP',
  payload: {
    conversion_identifier: 'LeadTree',
    email: 'devtest2@gmail.com',
    name: 'Test Developer'
  }
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

async function sendEvent() {
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Erro desconhecido');
    console.log('Evento enviado com sucesso:', data);
  } catch (err) {
    console.error('Erro ao enviar evento:', err.message);
  }
}

sendEvent();
/* Expected output if status 200(OK): 
{
  "event_uuid": "5dad89a7-503f-429d-9b09-05f5650a762d"
}
*/