const router = require('express').Router()

router.post('/email', function (req, res) {
    res.json({ msg: 'This is CORS-enabled for an allowed domain.' })
})

module.exports = router