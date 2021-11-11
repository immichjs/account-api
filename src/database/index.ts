import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/account-service')
mongoose.Promise = global.Promise

export default mongoose
