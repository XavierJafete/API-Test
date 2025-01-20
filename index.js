const express = require('express'); // Importando o Express
const app = express(); // Criando o app
const port = 3000; // Porta para o servidor

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando! Este é o teste básico.');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});