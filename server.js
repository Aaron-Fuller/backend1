const express = require('espress');

const port = 5000;

const server = express();

server.use(express.json());

server.get('/hobbits', (req, res) => {
    res.send('Welcome to hobbiton')
});

server.post('/hobbits', (req, res) => {
    res.status(201).json({ usr: '/hobbits', opperation: 'POST'});
});

server.put('/hobbits', (req, res) => {
    res.status(200).json({ url: '/hobbits', operation: 'PUT' });
  });

server.delete('/hobbits', (req, res) => {
    res.status(204);
  });

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
});

