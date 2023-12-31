import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '0_app/App';

const app = express();
const staticPath = path.join(__dirname, 'build');

app.get('/', (req, res) => {
    const appContent = ReactDOMServer.renderToString(<App />);
    const indexFile = path.join(staticPath, 'index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Failed to load the app.');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${appContent}</div>`),
        );
    });
});

app.use(express.static(staticPath));

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
