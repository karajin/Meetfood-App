const express = require('express');
const app = express();
const routeTest = require('./routes/routeTest');
const mongoose = require('mongoose');

app.use('/api/v1/', routeTest);

mongoose
  .connect(
    'mongodb+srv://karajin1874:jinrong258369@cluster0.v8n9djl.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'seefood-database',
    }
  )
  .then(() => {
    console.log('Database Connection is ready...');
    app.listen(8080);
    console.log('server listening on port 8080');
  })
  .catch((err) => {
    console.log(err);
  });
