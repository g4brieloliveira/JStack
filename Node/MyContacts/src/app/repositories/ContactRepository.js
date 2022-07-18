const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gabriel',
    email: 'gabriel@mail.com',
    phone: '00000000000',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
