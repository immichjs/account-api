import User from '../models/User'
import { Request, Response } from 'express'

const register = async (request: Request, response: Response) => {
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
export default register
