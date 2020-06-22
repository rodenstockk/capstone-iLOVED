const express = require('express');
const app = express();
const cors = require('cors');
const restsRoutes = require('./routes/rests');
const favRoutes = require('./routes/fav');

const port = process.env.PORT || 5000

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })

app.use(cors());
app.use(express.json());


app.use('/restaurants', restsRoutes)
app.use('/favorite', favRoutes)

app.use(express.static('public'));

app.listen(port, () => {
    console.log('Listening on 5000 local server yay!')
})