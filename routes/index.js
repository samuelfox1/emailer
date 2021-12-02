const { sendEmail } = require('../utils')

const router = require('express').Router()


router.post('/email', async (req, res) => {
    try {
        const { destination, action, subject, body } = req.body

        const response = await sendEmail(destination, action, subject, body)

        res.json({ response })

    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports = router