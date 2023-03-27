const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  age: {
    type: Number,
    required: true,
    min: 19
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    match: /^\d{10}$/
  },
  birthday: {
    type: String,
    required: true,
    match: /^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[012])\-\d{4}$/
  },
  city: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  state: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  country: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  address1: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  address2: {
    type: String,
    trim: true,
    maxlength: 100
  }
})

const model = mongoose.model('User', userSchema)
module.exports = model