const router = require('express').Router()
const cors = require('cors')
const { corsOptions } = require('../config/cors')


router.post('/email', cors(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for an allowed domain.' })
})

module.exports = router