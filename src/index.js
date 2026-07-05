const express = require('express');
const FingguServer = require('./FingguServer');

const fingguVar_app = express();
const fingguVar_port = process.env.PORT || 3000;

FingguServer(fingguVar_app);

fingguVar_app.listen(fingguVar_port, () => {
  console.log(`Server is running on port ${fingguVar_port}`);
});