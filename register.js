const bcrypt = require('bcryptjs');
const saltRounds = 10;

const password = 'miaurek2137'

bcrypt.hash(password, saltRounds, function(err, hash) {
    console.log(hash)
});