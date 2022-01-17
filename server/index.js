
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const bodyParser = require('body-parser')
const movieRoutes = require('./controllers/movie');
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to Movie Database')
});

app.use('/movies', movieRoutes);

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})



app.use(bodyParser.json);
module.exports = app;