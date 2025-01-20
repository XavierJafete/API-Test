const express = require('express'); // Importando o Express
const app = express(); // Criando o app
const cors = require('cors');
const port = 3000; // Porta para o servidor

app.use(cors());
app.use(express.json());
app.get('/mpesa', (req, res) => {
    res.json({ message: 'API funcionando!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando! Este é o teste básico.');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});