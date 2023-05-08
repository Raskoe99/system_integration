import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));

import cors from 'cors';
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to form page");
});

app.post('/form', (req, res) => {
    res.send({ data: req.body })
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});