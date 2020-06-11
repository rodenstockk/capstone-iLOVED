const express = require('express');
const app = express();
const cors = require('cors');
const restsRoutes = require('./routes/rests');
const favRoutes = require('./routes/fav');

app.use(cors());
app.use(express.json());


app.use('/', restsRoutes)
app.use('/', favRoutes)

app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Listening on 8080 local server yay!')
})