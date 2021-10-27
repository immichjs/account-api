const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

UserSchema.pre('save', async function (next) {
  const encryptPassword = await bcrypt.hash(this.password, 10)
  this.password = encryptPassword

  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
