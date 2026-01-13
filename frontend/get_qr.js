const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Extract tunnel URL from the response
    const expMatch = data.match(/exp:\/\/[^\s"'<>]+/);
    if (expMatch) {
      console.log('✅ Expo Go URL encontrada:');
      console.log(expMatch[0]);
    } else {
      console.log('URL não encontrada na resposta');
    }
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
