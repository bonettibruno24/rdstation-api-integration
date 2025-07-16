require('dotenv').config();

const url = 'https://api.rd.services/auth/token';

const payload = {
    client_id: process.env.RD_CLIENT_ID,
    client_secret: process.env.RD_CLIENT_SECRET,
    refresh_token: process.env.RD_REFRESH_TOKEN
};

const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
};

async function fetchToken() {
    try {
        const res = await fetch(url, options);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Erro ao obter token');
        console.log('Token gerado com sucesso:', data);
    } catch (err) {
        console.error('Erro ao gerar token:', err.message);
    }
}

fetchToken();
/* Expected output if status 200(OK): {

  access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5yZC5zZXJ2aWNlcyIsInN1YiI6IkxTZWJ3YkNXRWxGRUl3V1Zrdl9XdkxCWkVRVWVxcjM4X0g5aTNUYkRQaDRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBwLnJkc3RhdGlvbi5jb20uYnIvYXBpL3YyLyIsImFwcF9uYW1lIjoiTmV3TGVhZHMiLCJleHAiOjE3NTI2MTMyNzcsImlhdCI6MTc1MjUyNjg3Nywic2NvcGUiOiIifQ.M5U8a9u5SUJH2_4Z6TDnBgKvEVJxtrp9NTaG0-z7ZAyh6vZoHDTEhsREvT6qrctotQswiicBYrupFoRs3k1vrNWmzMfKZ5KemYp-DfXKWlUMsxL_N5sIdbH8eE-NZS6M7fxAydJbiopBh5GlaFnMhZaQbGNoIXQe7J6Udjn4vEl3vr6YWE3EzW8bvVmvcX6dSEeFMFcHeG7GjjK1V6LWzcrCdzE77ieSKJDHSIU89324nJIUYR*&IJiuhu32y4982hiudsf(@#&hbSJIHDUY@*&IDGHSA',
  expires_in: 86400,
  refresh_token: 'LKDShurIU$(*#YNIJD83y4ijdhsiu2384dsg'
}
*/
