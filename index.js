const express = require('express');

const bodyParser = require('body-parser');
const productsController = require('./controller/productsController')

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/products', productsController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`ouvindo a porta ${PORT}`);
});
