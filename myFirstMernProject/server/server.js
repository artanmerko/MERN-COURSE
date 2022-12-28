const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose.config');    /* This is new */
app.use(cors());
app.use(express.json());
/* This is new and allows JSON Objects to be posted */

app.use(express.urlencoded({ extended: true }));
/* This is new and allows JSON Objects with strings and arrays*/

require('./routes/person.routes')(app);

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})