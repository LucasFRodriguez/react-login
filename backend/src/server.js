const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.get('/',(req, res) =>{
    res.send('Oi caralho!')
});

app.listen(3000, () => {
    console.log('Sa porra ta funcinando MLK!')
});