const fastify = require('fastify')()
const Client = require('bitcoin-core');

const auth = {
    host:"localhost",
    username:"monacoin",
    password:"monacoin123",
}

const fs = require('fs');

fastify.get('/', async(request, reply) => {
    return fs.readFileSync("./index.html", "utf8")
})
fastify.post('/api/broadcast', async(request, reply) => {
    const rawtx = request.params.rawtx
    const client = new Client(auth);
    client.sendRawTransaction(rawtx)
})

fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})


