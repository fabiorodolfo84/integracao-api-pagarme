const express = require('express');
const rotas = require('./rotas');

const app = express();

// Corrigindo a chamada do middleware express.json()
app.use(express.json());

app.use(rotas);


app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});

