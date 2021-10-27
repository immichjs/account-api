const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/account-service')
mongoose.Promise = global.Promise

module.exports = mongoose
