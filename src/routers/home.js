const home = (request, response) => {
  response.status(200).send({ message: 'OK' })
}

module.exports = home
