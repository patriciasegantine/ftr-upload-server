import {env} from '@/env'
import {fastifyCors} from '@fastify/cors'
import {fastify} from 'fastify'
import {uploadImageRoute} from "@/infra/http/routes/upload-image";

const server = fastify()

server.register(fastifyCors, { origin: '*' })

server.register(uploadImageRoute)

console.log(env.DATABASE_URL)

server.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
    console.log(`Server running on port ${env.PORT}`)
})