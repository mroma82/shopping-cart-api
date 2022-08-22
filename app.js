// init app
const express = require('express');
const app = express();
const port = 3000;

// cors
const cors = require('cors');
app.use(cors());

// post body parsing
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require('./routes/products').add(app);
require('./routes/auth').add(app);

// listen
app.listen(port, () => console.log(`Mock API app listening on port ${port}!`))

