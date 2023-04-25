const Event = require('../models/Event')
const asyncHandler = require('express-async-handler')



const getAllEvent = asyncHandler(async (req, res) => {
    const event = await Event.find()
    res.status(200).json(event)
})

const setEvent = asyncHandler(async (req, res) => {
    // if (!req.body.title) {
    //     res.status(400)
    //     throw new Error('Please add a text field')
    // }

    const newEvent = await Event.create({
        title: req.body.title,
        description: req.body.description,
        photo: req.body.photo,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        address: req.body.address
    })

    res.status(200).json(newEvent)
})




module.exports = setEvent
module.exports = getAllEvent