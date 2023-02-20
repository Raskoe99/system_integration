import express from 'express';

import converter from 'converter.js';

const app = express();


app.get('/', (req, res) => {
  res.send({message: "Welcome to the converter API"});
});

app.get('/txt', (req, res) => {
    res.send(converter.txtReader('../data_types/data.txt'));
});

app.get('/json', (req, res) => {
    res.send(converter.jsonReader('../data_types/data.json'));
});

app.get('/yaml', (req, res) => {
    res.send(converter.yamlReader('../data_types/data.yaml'));
});

app.get('/xml', (req, res) => {
    res.send(converter.xmlReader('../data_types/data.xml'));
});

app.get('/csv', (req, res) => {
    res.send(converter.csvReader('../data_types/data.csv'));
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
