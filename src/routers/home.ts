import { Request, Response } from 'express'

const home = (request: Request, response: Response) => {
  response.status(200).send({ message: 'OK' })
}

export default home
