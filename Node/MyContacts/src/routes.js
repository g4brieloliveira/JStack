const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/', (request, response) => {
  response.send('Hello World');
});

router.get('/contacts', ContactController.index);

module.exports = router;
