const mongoose = require('mongoose')

const Event = mongoose.model('Event', new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add a Title']
    },
    description:{
        type: String,
        required: [true, 'Please add a Description']
    },
    photo:{
        type: String,
        required: [true, 'Please add a Photo or Photo_Url']
    },
    start_date:{
        type: String,
        required: [true, 'Please add a Starting date']
    },
    end_date:{
        type: String,
        required: [true, 'Please add a End date']
    },
    address:{
        type: String,
        required: [true, 'Please add an address']
    }
}))
module.exports = Event