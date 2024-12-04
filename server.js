const express = require('express');
const cors = require ('cors');
const clientesRoutes = require ('./routes/clientesRoutes');
const professorRoutes = require ('./routes/professorRoutes');
const telefoneRoutes = require ('./routes/telefoneRoutes');
const veiculosRoutes = require ('./routes/veiculosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/clientes', clientesRoutes);
app.use('/professor', professorRoutes);
app.use('/telefone', telefoneRoutes);
app.use('/veiculos', veiculosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});