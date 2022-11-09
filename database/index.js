const mongoose = require('mongoose');
const { mongoUri } = require('../config');

(async () => {
    await mongoose.connect(`${mongoUri}/website`, {
        keepAlive: true
    });

    console.log('Connected to database!');
})();
