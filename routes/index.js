const { sendEmail } = require('../utils')

const router = require('express').Router()


router.post('/email', async (req, res) => {
    try {
        const { destination, action, subject, body } = body

        await sendEmail(destination, action, subject, body)

        res.json({ msg: 'This is CORS-enabled for an allowed domain.' })

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router