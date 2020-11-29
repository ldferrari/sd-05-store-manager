const express = require('express');
const rescue = require('express-rescue');
const controllers = require('./controllers');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/products', controllers.products);

app.listen(PORT, )
