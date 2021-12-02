const { sendEmail } = require('../utils')

const router = require('express').Router()


router.post('/email', async ({ body }, res) => {
    try {
        const { response } = await sendEmail(body)

        res.json({ response })

    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports = router