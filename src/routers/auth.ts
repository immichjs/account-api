import User from'../models/User'
import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'

const auth = async (request: Request, response: Response) => {
  const { email, username, password } = request.body

  let user

  if (email) {
    user = await User.findOne({ email }).select('+password')
  } else if (username) {
    user = await User.findOne({ username }).select('+password')
  }

  if (!user)
    return response.status(400).send({ error: 'User not found' })

  if (!await bcrypt.compare(password, user.password ))
    return response.status(400).send({ error: 'Incorrect password' })

  user.password = undefined

  response.send({ user })
}

export default auth
