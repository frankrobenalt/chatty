const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const messages = [
    
];


const app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/messages', function (req, res, next) {
    res.status(200).json({ messages: messages });
  });

  app.post('/messages', function (req, res, next) {
    messages.push({ message: req.body.message, time: new Date(), username: req.body.username });
    res.status(200).json({ messages: messages });
  });

app.listen(port, function(){
    console.log(`listening on ${port}`);
});

