const express = require('express');
const { URLSearchParams } = require('url');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const port = 3000;
const app = express();

function makeConfig(authorizationToken) {
    data = {
        headers: {
            authorization: `Bearer ${authorizationToken}`
        }
    };
    return data;
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
});

app.post('/user', (req, res) => {
    const data_1 = new URLSearchParams();

    data_1.append('client_id', process.env.CLIENT_ID);
    data_1.append('client_secret', process.env.CLIENT_SECRET);
    data_1.append('grant_type', 'authorization_code');
    data_1.append('redirect_uri', `http://localhost:${port}`);
    data_1.append('scope', 'identify');
    data_1.append('code', req.body);

    fetch('https://discord.com/api/oauth2/token', { method: 'POST', body: data_1 })
        .then(response => response.json())
        .then(data => {
            axios
                .get('https://discord.com/api/users/@me', makeConfig(data.access_token))
                .then(response => {
                    res.status(200).send(response.data.username);
                })
                .catch(err => {
                    console.log(err);
                    res.sendStatus(500);
                });
        });
});

app.listen(port, () => {
    console.log(`App listening! Link: http://localhost:${port}/`);
});
