const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3001;

/** solution found here
 * https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
 */

const allowedOrigins = ['http://localhost:3001', 'https://samuelfox1.github.io']
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes'))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));