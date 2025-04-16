// Importa o módulo do Express
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor vai rodar
const port = process.env.PORT || 3001;

// Define uma rota GET simples para o caminho '/'
app.get('/', (req, res) => {
  res.send('Olá do seu backend!');
});

// Inicia o servidor e o faz escutar na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});