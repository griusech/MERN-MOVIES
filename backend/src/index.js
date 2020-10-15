
const express = require('express')
const app = express();
const cors = require('cors')
const path = require('path')
require('./database')

const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/upload', express.static(path.join(__dirname, 'upload')));


// Routes
app.use('/api/movies', require('./routes/movie'))

app.listen(port, () => {
    console.log('Server on port', port)
})
