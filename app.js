const express = require('express');
const os = require('os');
const moment = require('moment');

const app = express();
const port = 3000;

// Configurar EJS como a engine de visualização
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // Obter o endereço IP do servidor
  const ip = getIpAddress();

  // Obter a hora atual do servidor
  const horaAtual = moment().format('YYYY-MM-DD HH:mm:ss');

  // Renderizar a página ejs com as informações
  res.render('index', { ip, horaAtual });
});


app.get('/rotaautomatica', (req, res) => {
  // Obter o endereço IP do servidor
  const ip = "Github Action é muito legal 👍"

  // Obter a hora atual do servidor
  const horaAtual = "Fui criado automaticamente"

  // Renderizar a página ejs com as informações
  res.render('index', { ip, horaAtual });
});

// Função para obter o endereço IP do servidor
function getIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const iface in interfaces) {
    const ifaceInfo = interfaces[iface];
    for (const alias of ifaceInfo) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'Endereço IP não encontrado';
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

