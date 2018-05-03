const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shoeRouter = require('./routes/shoe.route');


// use body-parser
app.use(bodyParser.json());

// serve static files
app.use(express.static('server/public'));

// Routes
app.use('/shoe', shoeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`doin the damn thing on port: ${PORT}`);
});