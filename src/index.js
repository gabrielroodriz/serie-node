const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require('./controllers/index')(app);


app.listen(PORT, () => {
    console.log(`Servidor sendo executado na PORT: ${PORT}`)
});