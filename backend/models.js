// const mongoose = require('mongoose')


// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     verified: {
//         type: Boolean,
//         default: false,
//     },
//     verificationToken: String,
//     addresses: {
//         name: String,
//         mobileNumber: String,
//         houseNumber: String,
//         street: String,
//         landMark: String,
//         city: String,
//         country: String,
//         postalCode: String,
//     },
//     createdAt: {
//     type: Date,
//     default: Date.now()
// },
// })

// const User = mongoose.model('User', userSchema)

// module.exports = User






const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', userSchema);



// Residency Schema
const residencySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: String,
    country: String,
    image: String,
    facilities: {
        type: [String],
        default: [],
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Residency = mongoose.model('Residency', residencySchema);

module.exports = { User, Residency };

