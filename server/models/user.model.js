import mongooose from 'mongoose'


const skYouthUser = new mongooose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    
})