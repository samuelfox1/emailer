const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.port || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes'))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));