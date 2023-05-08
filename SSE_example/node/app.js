import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json())

app.use(cors());

app.get('/status', (request, response) => response.json({clients: clients.length}));

let clients = [];
let facts = [];

function eventsHandler(request, response, next) {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    };
    response.writeHead(200, headers);
  
    const data = `data: ${JSON.stringify(facts)}\n\n`;
  
    response.write(data);
  
    const clientId = Date.now();
  
    const newClient = {
        id: clientId,
        response
    };
  
    clients.push(newClient);
  
    request.on('close', () => {
        console.log(`${clientId} Connection closed`);
        clients = clients.filter(client => client.id !== clientId);
    });
}
  
app.get('/events', eventsHandler);

function sendEventsToAll(newFact) {
    clients.forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
}
  
async function addFact(request, response, next) {
    const newFact = request.body;
    facts.push(newFact);
    response.json(newFact)
    return sendEventsToAll(newFact);
}
  
app.post('/fact', addFact);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Facts Events service listening at http://localhost:${PORT}`)
})
