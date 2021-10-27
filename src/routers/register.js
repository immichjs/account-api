const User = require('../models/User')

const register = async (request, response) => {
  const { email } = request.body

  try {
    if (await User.findOne({ email }))
      return response.status(400).send({ error: 'User already exists' })

    const user = await User.create(request.body)
    return response.send({ user })
  } catch (error) {
    return response.status(400).send({ message: error })
  }
}

module.exports = register
