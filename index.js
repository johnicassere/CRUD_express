const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/user.route');
const connectToDatabase = require('./src/database/database');

app.use(cors());
app.use(express.json());
connectToDatabase();

app.use('/user', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
