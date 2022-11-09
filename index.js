const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');

const { mongoUri } = require('./config');
const authRoute = require('./routes/auth');

require('./strategies/discord');
require('./database');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/views'));

app.use(cookieParser());
app.use(
    session({
        secret: 'APODAJDSDASMCZXMZADASDASDPASDOASDSAK',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: `${mongoUri}/website`
        })
    })
);

app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/wallah', (req, res) => {
    if (req.user) {
        res.send(`Du har liten tiss, ${req.user.username}`);
    } else {
        res.redirect('/');
    }
});

app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}!`);
});
