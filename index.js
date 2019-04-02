const bodyParser = require('body-parser');
const express = require('express');
const textrank = require("text-rank-tag");

const app = express();
const jsonParser = bodyParser.json();

app.listen(8080, () => {
    console.log('server listening on port 8080');
});

app.get('/lynxify', jsonParser, (req, res) => {
    res.send(lynxify(req.body.text));
});

function lynxify(text) {
    return text
        .replace(
            new RegExp(
                `${textrank.generateTags(text).tags.join('|')}`,
                'g'
            ),
            'lynx',
        );
}

